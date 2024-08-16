const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constant");

const checkAuth = (req, res, next) => {
  const { token } = req.headers;
  try {
    const user = jwt.verify(token, JWT_SECRET_KEY);
    req.authUser = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  checkAuth,
};
