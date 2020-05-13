const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class Helper {
    static hashPasword(passoword) {
        return bcrypt.hashSync(passoword, 10)
    }
    static comparePassword(input, passoword) {
        return bcrypt.compareSync(input, passoword)
    }
    static generateToken(payload) {
        return jwt.sign(payload, process.env.SECRET)
    }
    static verify(token) {
        return jwt.verify(token, process.env.SECRET)
    }
}

module.exports = Helper