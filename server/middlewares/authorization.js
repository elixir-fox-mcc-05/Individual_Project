const { Favorite } = require('../models/index');

function authorization(req, res, next){
    let { favoriteId } = req.params
    Favorite.findByPk(Number(favoriteId))
        .then(data => {
            if(data) {
                if(data.userId == req.currentUserId){
                    next()
                }
                else {
                    return next({
                        name: 'Unauthorized',
                        errors: [{
                            message: 'Unauthorized, Please login first'
                        }]
                    })
                }
            }
            else {
                return next({
                    name: 'NotFound',
                    errors: [{
                        message: `Favorite with id ${favoriteId} NOT FOUND`
                    }]
                })
            }
        })
}

module.exports = authorization;