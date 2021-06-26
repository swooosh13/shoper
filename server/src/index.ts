import express, {Express} from 'express';
import dotenv from 'dotenv';
import log4js from 'log4js';
import {UserController} from "./controller/user-controller";
import {createExpressServer, useExpressServer} from "routing-controllers";
import httpContext from 'express-http-context';
import bodyParser from "body-parser";
dotenv.config();

import sequelize from './config/db';

const PORT = process.env.PORT;

const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;

logger.info('log4js log info');
logger.info('log4js log debug');
logger.error('log4js log error');

const app: Express = express();
app.use(bodyParser.json());
app.use(httpContext.middleware);

useExpressServer(app, {
  controllers: [UserController]
});

app.use((req, res, next) => {
  httpContext.ns.bindEmitter(req);
  httpContext.ns.bindEmitter(res);
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log("Server has been started on port " + PORT);
    });
  } catch (e){
    console.log(e);
  }
};

start();
