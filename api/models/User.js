// All required import
const mongoose = require("mongoose");

// Schema for the model
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    lastname: { type: String, default: "" },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true, default: "" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
