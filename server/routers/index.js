const router = require('express').Router()
const Auth = require('../middlewares/authentication')
const api = require('./api')
const user = require('./user')

router.use('/', user)
router.use(Auth)
router.use('/api', api)

module.exports = router