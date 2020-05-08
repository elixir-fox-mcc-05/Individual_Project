// <-----Hide this when you create app.js----->
require('dotenv').config()
    // <----------------dotenv---------------->
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

const generateToken = (payload) => {
    return jwt.sign(payload, SECRET)
}

const verifyToken = (payload) => {
    return jwt.verify(payload, SECRET)
}

module.exports = { generateToken, verifyToken }