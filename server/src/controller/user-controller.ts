import {Action, Controller, Get, Param, UseAfter, UseBefore, UseInterceptor} from 'routing-controllers';
import 'reflect-metadata';
import {logginAfter, logginBefore} from "../middleware/middleware";

@Controller()
export class UserController {

  @UseBefore(logginBefore)
  @UseAfter(logginAfter)
  @UseInterceptor((action: Action, content: any) => {
    console.log('change response');
    return content;
  })
  @Get('/users/:id')
  getOne (@Param('id') id:number) {
    return 'This action returns user #' + id;
  }
}
