let router = require('express').Router()
let userRouter = require('./user')
// let travelRouter = require('./travel')

router.use('/user', userRouter)
// router.use('/travel', travelRouter)

module.exports = router