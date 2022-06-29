const mongoose = require("mongoose");

Schema = mongoose.Schema;
const { isValidEmail } = require("./utils");

const userSchema = new Schema({
  user_name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: isValidEmail,
    lowercase: true,
  },
  password: { type: String, required: true, select: false },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  birthday: { type: Date, required: true },
  language: { type: String, requred: true },
  country: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema, "users");