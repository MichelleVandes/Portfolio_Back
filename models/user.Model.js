const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    pseudo: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLenght: 6, maxLenght: 1024 },
  },
  { timestamps: true }
);


const userModel = mongoose.model("user", userSchema);
module.exports = userModel;