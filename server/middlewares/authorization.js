"use strict";
const {Anime} = require("../models");

function Authorization(req, res, next){
    const UserId = req.currentUser;
    const {id} = req.params;
    Anime
        .findByPk(id)
        .then(list => {
            if(list.UserId === UserId){
                next();
            } else {
                next({
                    type : "Not Authorized",
                    code : 401,
                    msg : "You are not allowed to do this"
                });
            }
        })
        .catch(err=> {
            next (err);
        });
}

module.exports = Authorization;