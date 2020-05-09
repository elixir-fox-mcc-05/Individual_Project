const router = require('express').Router()

const userRouter = require('./userRouter')
const superHeroRouter = require('./superHeroRouter')

router.use('/', userRouter)
router.use('/', superHeroRouter)

module.exports = router