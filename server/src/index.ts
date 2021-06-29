import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';
import passport from 'passport';

import sequelize from './config/db';
import router from './routes/index';
import errorHandlingMiddleware from './middleware/ErrorHandlingMiddleware';
import configurePassport from './config/passport';
import configPassport from "./config/passport";
const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(express.static(path.resolve(__dirname, 'static')));

app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandlingMiddleware);

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
