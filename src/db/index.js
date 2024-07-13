import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n mongodb connected to ${connectionInstance.connection.host}`
    );
  } catch (e) {
    console.error('connection error : ', e);
    process.exit(1);
  }
};

export default connectDB;
