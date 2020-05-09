const bcryptjs = require('bcryptjs');

function generatePassword(password){
    let salt = bcryptjs.genSaltSync(10);
    let hash = bcryptjs.hashSync(password, salt);
    return hash;
}

function checkPassword(password, hash){
    return bcryptjs.compareSync(password, hash); 
}

module.exports = {
    generatePassword,
    checkPassword
}