const { User } = require('../models');
const { compareHash } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');

class UserController{
    static register(req, res, next) {
        const { name, username, email, password } = req.body;

        User
            .create({
                name,
                username,
                email,
                password
            })
            .then(user => {
                res.status(201).json({
                    id: user.id,
                    username: user.username,
                    email: user.email
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body;

        User
            .findOne({
                where: {
                    email
                }
            })
            .then(user => {
                if(user) {
                    let compare = compareHash(password, user.password);
                    if(compare) {
                        let payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email
                        }
                        let access_token = generateToken(payload);
                        res.status(200).json({
                            access_token
                        })
                    } else {
                        throw {
                            msg: 'Invalid email/password',
                            code: 400
                        }
                    }   
                } else {
                    throw {
                        msg: 'Invalid email/password',
                        code: 400
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }

    static googleLogin(req, res, next) {
        let name;
        let email;
        let newUser = false;
        
        const { google_token } = req.headers;
        console.log(google_token);

        verifyIdToken(google_token)
            .then(payload => {
                name = `${payload.given_name} ${payload.family_name}`
                email = payload.email;
                return User
                    .findOne({
                        where: {
                            email
                        }
                    })
            })
            .then(user => {
                if (user) {
                    return user;
                } else {
                    newUser = true;
                    return User
                        .create({
                            name,
                            email,
                            password: process.env.GOOGLE_PASSWORD_DEFAULT
                        })
                }
            })
            .then(newUser => {
                let code = newUser ? 201 : 200;
                const access_token = generateToken({
                    id: newUser.id,
                    email:newUser.email
                })
                res.status(code).json({
                    access_token
                })
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = UserController;
