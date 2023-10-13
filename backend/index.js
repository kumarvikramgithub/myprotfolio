import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./Routes/routes.js"
import Connection from "./Database/db.js"
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/", Router);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT} successfully`);
    Connection();
})
