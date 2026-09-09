import "dotenv/config";
import mongoose from "mongoose";
import User from "./models/User.js";

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const adminExists = await User.findOne({ email: "admin@airbnb.com" });
    if (!adminExists) {
      const admin = new User({
        username: "Admin",
        email: "admin@airbnb.com",
        password: "admin123",
        role: "admin",
      });
      await admin.save();
      console.log("✅ Admin user created!");
      console.log("Email: admin@airbnb.com");
      console.log("Password: admin123");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

createAdmin();
