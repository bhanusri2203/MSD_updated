import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// ✅ Drop old email index (only runs once — safe)
User.collection.dropIndex("email_1").catch(() => {});

export default User;
