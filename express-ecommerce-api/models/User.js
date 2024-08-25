const mongoose = require("mongoose");

// roles = ["super admin", "admin", "sales", "customer"]

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileImage: String,
  roles: {
    type: [String],
    default: ["customer"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
