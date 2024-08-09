import app from "./app.js"
import express from "express";
import { connectToDatabase } from "./db/connection.js"
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3008;
connectToDatabase().then(() => {
// app.get("/hello",(req,res,next)=>{
//     return res.send("HEYYY");
// })
app.listen(3008, () => console.log("Server open and conected to database 👍"));

}).catch(err => console.log(err));
