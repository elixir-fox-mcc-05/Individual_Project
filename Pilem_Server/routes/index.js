const express = require('express');
const router = express.Router();

const UserRouter = require('./userRouter.js');
const MovieRouter = require('./movieRouter.js');

router.use('/', UserRouter);
router.use('/movies', MovieRouter)

module.exports = router;
