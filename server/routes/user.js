"use strict";
const router = require("express").Router();
const UserController = require("../controller/UserController");

router.post("/login", UserController.Login);
router.post("/register", UserController.create);
router.post("/google-login", UserController.googleLogin);

module.exports = router;