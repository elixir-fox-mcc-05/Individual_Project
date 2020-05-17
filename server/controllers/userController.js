'use strict'

const {User} = require('../models')
const {compare} = require('../helpers/bcrypt.js')
const {userToken} = require('../helpers/jwt.js')
const verificationToken = require('../helpers/googleOauth.js')

class UserController {

    static register(req, res, next) {
        let {email, password} = req.body;
        User.create({
            email,
            password
        })
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                next({error: err});
            });
    }

    static login(req, res, next) {
        let {email, password} = req.body;
        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (result) {
                    let check = compare(password, result.password);
                    if (check) {
                        let token = userToken({
                            id : result.id,
                            email : result.email
                        })
                        res.status(200).json({token})
                    }
                    else {
                        throw {
                            msg: `Email or Password is wrong`,
                            code: 401
                        };
                    }
                }
                else {
                    throw {
                        msg: `Email or Password is wrong`,
                        code: 401
                    }
                }
            })
            .catch(err => {
                next({error: err});
            })
    }

    static googleLogin(req, res, next) { 
        let google_token = req.headers.google_token
        let email = null
        let newUser = false
        verificationToken(google_token)
            .then(payload => {
                email = payload.email
                return User.findOne({
                    where : {
                        email
                    }
                })
            })
            .then(user => {
                if (user) {
                    return user
                } 
                else {
                    newUser = true
                    return User.create({
                        email,
                        password : process.env.DEFAULT_GOOGLE_PASSWORD
                    })
                }
            })
            .then(user => {
                let code = newUser ? 202 : 201
                let token = userToken({
                    id : user.id,
                    email : user.email
                })
                res.status(code).json({
                    token : token
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController;