const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController.js")

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/googleSign', userController.googleSign)

module.exports = router