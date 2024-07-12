import mongoose from 'mongoose';
import { DB_NAME } from './constants';
import express from 'express';

const app = express();

//connecting to the databse
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on('error', (error) => {
      console.error("ERROR: Couldn't connect //index.js:11", error);
      throw new error();
    });

    app.listen(process.env.PORT, () => {
      console.log('listening on port '`${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw new Error();
  }
})();
