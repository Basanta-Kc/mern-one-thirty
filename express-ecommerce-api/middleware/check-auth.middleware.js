const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constant");

// const checkAuth = (role) => {
//   return (req, res, next) => {
//     const { token } = req.headers;
//     try {
//       const user = jwt.verify(token, JWT_SECRET_KEY);
//       if (!user.roles.includes(role)) {
//         res.status(401).json({ message: "Unauthorized action" });
//         return;
//       }
//       req.authUser = user;
//       next();
//     } catch (error) {
//       res.status(401).json({ message: "Unauthorized" });
//     }
//   };
// };
// useCase = checAuth('customer') , checkAuth('Admin')

const checkAuth = (req, res, next) => {
  console.log(req.cookies);

  const token = req.cookies.token ?? req.headers.token;
  try {
    const user = jwt.verify(token, JWT_SECRET_KEY);

    req.authUser = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
// roles = ['Customer', 'Admin', 'Super Admin' ]
// roles.includes('cuomster')
const checkAuthAdmin = (req, res, next) => {
  const { token } = req.headers;
  try {
    const user = jwt.verify(token, JWT_SECRET_KEY);
    if (!user.roles.includes("Admin")) {
      res.status(401).json({ message: "Unauthorized action" });
      return;
    }
    req.authUser = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  checkAuth,
  checkAuthAdmin,
};
