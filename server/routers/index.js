const express = require('express');
const router = express.Router();
const userRouter = require('./user.js')
const dataRouter = require('./data.js')

router.get('/', () => {
    console.log("Welcome to WhatToCooK");
});
router.use('/user', userRouter);
router.use('/data', dataRouter);

module.exports = router;