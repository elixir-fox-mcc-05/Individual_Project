const { verifyToken } = require('../helpers/jwt.js');
const { User } = require('../models');

module.exports = {
    authenticateUser: (req, res, next) => {
        const { access_token } = req.headers;

        try {
            let decoded = verifyToken(access_token);
            const { id } = decoded;

            User
                .findByPk(id)
                .then(user => {
                    if(user) {
                        req.userId = user.id;
                        next();
                    } else {
                        throw {
                            msg: 'You do not have the authority to do this action',
                            code: 401
                        }
                    }
                })
                .catch(err => {
                    next(err);
                })
        } catch(err) {
            next(err);
        }
    }
}