const express = require("express");
const { body } = require("express-validator");
const { signIn, signUp } = require("../controllers/auth.controller");
const validate = require("../middleware/validator.middleware");
const router = express.Router();

// VALIDATORS
const signUpValidator = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Plz provide valid email address."),
  body("name").isLength({ min: 3, max: 100 }).notEmpty(),
  body("password").notEmpty(),
  validate,
];

// API ROUTES
router.post("/sign-up", signUpValidator, signUp);
router.post("/sign-in", signIn);

module.exports = router;
