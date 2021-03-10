var jwt = require('jsonwebtoken');

function jwtToken (password) {
    return jwt.sign(password, process.env.RAHASIA || 'gitu');
}

function verifyToken (token) {
    return jwt.verify(token, process.env.RAHASIA || 'gitu');
}

module.exports = {jwtToken, verifyToken}