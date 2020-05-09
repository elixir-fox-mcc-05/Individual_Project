const {verifyToken} = require('../helper/jwt')
const {User} = require('../models')

function authentication(req, res, next){
    let {access_token} = req.headers
    try {
        var decoded = verifyToken(access_token);
        let {id} = decoded
        User.findByPk(id)
            .then(data => {
                if(data){
                    req.userid = id
                    next()
                } else {
                    req.status(401).json({
                        msg: `not authenticated`
                    })
                }
            })
    } catch(err) {
        res.status(500).json({
            msg: `internal server err`
        })
    }
}

module.exports = authentication