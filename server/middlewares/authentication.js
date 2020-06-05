const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models/index');

function authentication(req, res, next){
    let token = req.headers.token;
    try {
        let decode = verifyToken(token);
        let { id } = decode
        User.findByPk(Number(id))
            .then(data => {
                if(data){
                    req.currentUserId = Number(id);
                    return next()
                }
                else {
                    return next({
                        name: 'NotFound',
                        errors: [{
                            message: 'User not found'
                        }]
                    })
                }
            })
            .catch(err => {
                return next({
                    name: 'Unauthorized',
                    errors: [{
                        message: 'User Unauthenticated'
                    }]
                })
            })
    } catch(err) {
        next(err)
    }
}

module.exports = authentication