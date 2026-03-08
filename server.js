import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import analyticsRoutes from "./router/route.js";

dotenv.config();

console.log("calling DB connection...");
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// API routes
app.use("/api/analytics", analyticsRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Sales Analytics API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});