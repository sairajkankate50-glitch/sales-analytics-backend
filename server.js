import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import analyticsRoutes from "./router/route.js"

dotenv.config()
console.log("calling DB connection...");
connectDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/analytics", analyticsRoutes);
app.get("/",(req,res)=>{
    res.send("api is running")
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})

