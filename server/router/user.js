let userRoutes = require('express').Router()
let UserCon = require('../controller/userCon.js')

userRoutes.post('/login',UserCon.login)
userRoutes.post('/register',UserCon.register)


module.exports = userRoutes