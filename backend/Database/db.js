import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const Connection = async () => {
    const DB_URL = process.env.DB_URL;
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true });
        console.log("Database connected successfully.");
    } catch (error) {
        console.log("Database connection Failed, Try again.");
    }
}

export default Connection;
