import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = 'mongodb://127.0.0.1:27017/crud';
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;