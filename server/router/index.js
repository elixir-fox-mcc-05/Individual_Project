const router = require('express').Router()
const Controller = require('../controller/controller')
const authenticaton = require('../middleware/authentication')

router.post('/login', Controller.login)
router.get('/',authenticaton, Controller.aroundMCC)

module.exports = router