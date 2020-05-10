const router = require('express').Router()
const User = require('../controller/user')

router.post('/signup', User.signUp)
router.post('/signIn', User.signIn)
router.post('/google', User.googleSignIn)

module.exports = router