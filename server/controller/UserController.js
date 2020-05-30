"use strict";
const {User} = require("../models");
const {comparePassword} = require("../helpers/bcrypt");
const {generateToken} = require("../helpers/jwt");
const verificationToken = require("../helpers/googleAuth");

class UserController{
    static Login(req, res, next){
        const {email, password} = req.body;
        User
            .findOne({
                where : {
                    email
                }
            })
            .then(user => {
                if(!user){
                    return next({
                        type : "Bad Request",
                        code : 400,
                        msg : "User Doesn't Exist"
                    });
                } else if(comparePassword(password, user.password)) {
                    const token = generateToken({
                        id : user.id,
                        email : user.email
                    });
                    res.status(202).json({
                        acces_token : token,
                        name : user.name
                    });
                } else {
                    return next({
                        type : "Bad Request",
                        msg : "Email/Password doesn't match",
                        code : 400
                    });
                }
            })
            .catch(err => {
                return next(err);
            });
    }

    static googleLogin(req, res, next){
        let google_token = req.headers.google_token;
        let email = null;
        let newUser = false;
        verificationToken(google_token)
            .then(payload => {
                email = payload.email;
                return User.findOne({
                    where : {
                        email
                    }
                });
            })
            .then(user => {
                if(user){
                    return user;
                } else {
                    newUser = true;
                    return User
                        .create({
                            name: process.env.Default_name,
                            email,
                            password : process.env.Default_user_password
                        });
                }
            })
            .then(user => {
                let code = newUser ? 202 : 201;
                let token = generateToken({
                    id : user.id,
                    email : user.email
                });
                res.status(code).json({
                    Token : token,
                    name : user.name
                });
            })
            .catch(err => {
                return next({
                    code : 500,
                    msg : "Something Went Wrong",
                    type : "Internal Server Error"
                });
            });
    }
    static create (req, res, next){
        const {name, password, confirmPassword, email} = req.body;
        if(password !== confirmPassword){
            return next({
                type : "Bad Request",
                code : 400,
                msg : "Password & Confirm Password doesn't match"
            });
        }
        const value = {
            name,
            password,
            email
        };
        User
            .create(value)
            .then(user =>{
                res.status(201).json({
                    id : user.id,
                    email : user.email
                });
            })
            .catch(err => {
                return next(err);
            });
    }
}

module.exports = UserController;