import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import Analytics from "./models/schema.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();
    console.log("Connected successfully ✅");

    // delete old data
    await Analytics.deleteMany();
    console.log("Old data deleted");

    const data = [
      { category: "Sales", amount: 5000 },
      { category: "Marketing", amount: 3000 },
      { category: "Development", amount: 7000 },
      { category: "Support", amount: 2000 },
      { category: "Sales", amount: 4500 },
      { category: "Marketing", amount: 2500 }
    ];

    await Analytics.insertMany(data);

    console.log("Data inserted successfully ✅");

    // close DB connection
    await mongoose.connection.close();
    process.exit();
  } catch (error) {
    console.log("Error while seeding data:", error);
    process.exit(1);
  }
};

// ✅ CALL FUNCTION
seedData();