//step1
// -- way 1 of importing dotenv -> require('dotenv').config({ path: './env' });

//way 2 of importing dotenv -> using import method
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

/* step3
  after this go to package.json and do this : 
before:
  "scripts": {
    "dev": "nodemon src/index.js"
  },
after:
  "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  },
*/

//step2- configuring the dotenv
dotenv.config({
  path: './env',
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Starting server on port :: ${process.env.PORT}`);
    });
    app.on('error', (err) => {
      console.log(`Error: ${err}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

/* -- USING IIFE(Immediately Invoked Function Expression) 
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
*/
