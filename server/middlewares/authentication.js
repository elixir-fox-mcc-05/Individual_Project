"use strict";
const {User} = require('../models');
const {verifyToken} = require('../helpers/jwt');

function Authentication(req, res, next){
    const {token} = req.headers;
    try {
        let decode = verifyToken(token);
        const {id} = decode;
        User
            .findByPk(id)
            .then(user => {
                if(user){
                    req.currentUser = id;
                    next();
                } else {
                    next({
                        type : "Not Found",
                        msg : "Please Login First",
                        code : 404
                    });
                }
            });
    } catch (err) {
        next(err);
    }
}

module.exports = Authentication;