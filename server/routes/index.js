"use strict";
const router = require('express').Router();
const userRouter = require("./user");
const AnimeRouter = require('./anime');

router.use("/user", userRouter);
router.use("/anime", AnimeRouter);

module.exports = router;