let { Todo } = require('../models')
let { verifyToken } = require('../helpers/jwt.js')

function authorization (req, res , next) {
    let id = req.body.user_id
    Todo.findByPk(req.params.id)
    .then(result=>{
        if(result.dataValues.user_id===id){
            next();
        } else {
            res.status(401).json({
                msg : 'not authorize',
                err,
            })
        }
    })
    .catch(err=>{
        res.status(401).json({
            msg : 'not found',
            err,
        })
    })
}


module.exports = authorization;