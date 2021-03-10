let router = require('express').Router()
let UserController = require('../controllers/user')
let {authentification} = require('../midllewares/auth')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleSign', UserController.googleSign)

module.exports = router