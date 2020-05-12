const router = require('express').Router()
const userRouter = require('./user')
const newsRouter = require('./news')

router.use('/users', userRouter)
router.use('/news', newsRouter)


module.exports = router