"use strict";
const bycript = require("bcryptjs");

function generatePassword(password){
    const salt = bycript.genSaltSync(15);
    const hash = bycript.hashSync(password, salt);
    return hash;
}

function comparePassword(password, hash){
    return bycript.compareSync(password, hash);
}

module.exports = {generatePassword, comparePassword};