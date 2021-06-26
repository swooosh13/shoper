import httpContext from 'express-http-context';

export function logginBefore(req: any, res: any, next?: (err?: any) => any): any {
  console.log('set tracedId = 123 ');
  httpContext.set('tracedId', 123);
  next();
}

export function logginAfter(req: any, res: any, next?: (err?: any) => any): any {
  console.log('do something after');
  console.log(`get tracedId = ${httpContext.get('tracedId')}`);
  next();
}
