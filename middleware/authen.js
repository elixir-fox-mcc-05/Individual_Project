const Helper = require('../helper/helper')
const { User } = require('../models')

class Authentication {
    static Authentication(req, res, next) {
        if (req.headers.token) {
            try {
                let decode = Helper.verify(req.headers.token)
                console.log(decode)

                User.findOne({ where: { id: decode.id, email: email } })

                    .then(data => {
                        if (data) {
                            req.UserId = decoded.id
                        } else {
                            res.status(401).json({ message: 'Please Login First' })
                        }
                    })

            } catch (err) {
                res.status(401).json({ message: 'Please Login First' })
            }
        } else {
            res.status(401).json({ message: 'Please Login First' })
        }
    }
}

module.exports = Authentication