const User = require("../models/User");

const signUp = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    res.status(400).json({
      message: "User already exist.",
    });
    return;
  }

  await User.create(req.body);
  res.status(201).json({
    message: "User sucessfully signed up.",
  });
};

const signIn = async (req, res) => {
  const user = await User.findOne(req.body);
  if (user) {
    res.status(200).json({
      message: "Succesfully signed in.",
    });
  } else {
    res.status(400).json({
      message: "Invalid Credentials.",
    });
  }
};

module.exports = {
  signIn,
  signUp,
};
