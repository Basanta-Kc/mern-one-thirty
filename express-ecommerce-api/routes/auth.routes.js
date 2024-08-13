const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

module.exports = router;
