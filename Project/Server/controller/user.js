const Model = require('../models')
const User = Model.User
const {checkPassword} = require('../helpers/bcrypt.js')
const {generateToken} = require('../helpers/jwt.js')
const verifyGoogle = require('../helpers/googleOAuth.js')


class UserController {
    static register(req, res){
        const {email, password} = req.body
    
        User.create({ email, password })
            .then(user => {
                res.status(201).json({
                    id : user.id,
                    email : user.email
                })
            })
            .catch(err => {
                res.status(500).json({
                    error : err.message
                })
            })
        }
        static logIn(req, res, next) {
            const {email, password} = req.body
    
            User.findOne({
                where : {email}
            })
            .then(result => {
                if(result){
                    let compare = checkPassword(password, result.password)
                    if(compare){
                        let token = generateToken({
                            id : result.id,
                            email : result.email,
                        })
                        res.status(201).json({
                            id : result.id, email : result.email, token
                        })
                    }else{
                        throw {
                            msg : 'email or password wrong',
                            code : 401
                        }
                    }
                }else{
                    res.status(400).json({
                        msg : 'Email and Password not match'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
        }

        static googleLogin(req, res, next) {
            let googleToken = req.headers.id_token;
            let payload;
            verifyGoogle(googleToken)
                .then(data => {
                    payload = data;
                    return User.findOne({ where : { email : payload.email } })
                })
                .then(result => {
                    if(result){
                        return result
                    }else{
                        return User.create({ email : payload.email, password : process.env.SECRET })
                    }
                })
                .then(user =>{
                    let token = generateToken({
                        id: user.id,
                        email : user.email
                    })
                    res.status(200).json({ token })
                })
                
                .catch(err =>{
                    console.log(err)
                })
        }
    
}

module.exports = UserController;