import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';
import passport from 'passport';

import router from './routes/index';
import errorHandlingMiddleware from './middleware/ErrorHandlingMiddleware';
import passportConfig from './middleware/passport';

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());

app.use(express.json());
app.use(passport.initialize());
app.use(express.static(path.resolve(__dirname, 'static')));

app.use(fileUpload({}));

passportConfig(passport);
app.use('/api', router);

app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server has been started on port " + PORT);
    });
  } catch (e){
    console.log(e);
  }
};

start();

export {app};