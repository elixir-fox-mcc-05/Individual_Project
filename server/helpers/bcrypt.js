const bcrypt = require('bcryptjs');

function encrypt(password) {
  let salt = bcrypt.genSaltSync(4);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
}

function compare(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = {encrypt, compare};