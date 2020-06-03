const express = require('express')
const router = express.Router()
const userRouter = require("./userRouter")
const movieRouter = require("./movieAPIRouter")

router.use('/', userRouter)
router.use('/movies', movieRouter)

module.exports = router