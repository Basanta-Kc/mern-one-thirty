const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constant");

const signUp = async (req, res) => {
  const { password, ...remainging } = req.body;
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    res.status(400).json({
      message: "User already exist.",
    });
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  await User.create({
    ...remainging,
    password: hashedPassword,
  });
  res.status(201).json({
    message: "User sucessfully signed up.",
  });
};

const signIn = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email }); // { email, password}

  if (!user) {
    res.status(401).json({
      message: "Invalid Credentials.",
    });
    return;
  }
  const isValidPassword = bcrypt.compareSync(req.body.password, user.password);

  if (isValidPassword) {
    const token = jwt.sig(
      {
        _id: user._id,
        email: user.email,
        roles: user.roles,
        name: user.name,
      },
      JWT_SECRET_KEY,
      {
        expiresIn: "10d",
      }
    );
    res.status(200).json({
      message: "Succesfully signed in.",
      token,
    });
    return;
  }

  res.status(401).json({
    message: "Invalid Credentials.",
  });
};

module.exports = {
  signIn,
  signUp,
};
