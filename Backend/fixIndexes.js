import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";  // adjust path if needed

dotenv.config();

async function dropOldIndexes() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Drop the old index on email
    await User.collection.dropIndex("email_1");
    console.log("🗑️  Dropped old email_1 index");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

dropOldIndexes();
