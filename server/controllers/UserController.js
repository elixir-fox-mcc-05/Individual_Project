const { User, UserAnime } = require('../models');
const { generateToken } = require('../helpers/jwt.js');
const { compare } = require('../helpers/bcrypt.js');
const verificationGoogle = require('../helpers/googleOauth.js');

class UserController {
  static login(req, res, next) {
    let { email, password } = req.body;
    User.findOne({
      where: {
        email
      },
      include: {
        model: UserAnime
      }
    })
      .then(user => {
        if (user) {
          if (compare(password, user.password)) {
            let token = generateToken({
              id: user.id,
              email: user.email
            });
            res.status(200).json({
              token,
              UserAnimes: user.UserAnimes
            });
          } else {
            return next({
              code: 400,
              message: `Password does not match`
            });
          }
        } else {
          return next({
            code: 400,
            message: `Email/Password did not match`
          });
        }
      })
      .catch(err => {
        return next(err);
      });
  }
  static register(req, res, next) {
    let { first_name, last_name, email, password } = req.body;
    User.create({
      first_name,
      last_name,
      email,
      password
    })
      .then(user => {
        res.status(201).json({
          User: user
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static findAll(req, res, next) {
    User.findAll({
      attributes: ['id', 'first_name', 'last_name', 'email']
    })
      .then(users => {
        res.status(200).json({
          Users: users
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static findOne(req, res, next) {
    let UserId = req.UserId;
    User.findOne({
      attributes: ['id', 'first_name', 'last_name', 'email'],
      where: {
        id: UserId
      },
      include: {
        model: UserAnime
      }
    })
      .then(result => {
        res.status(200).json({
          User: result
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static googleLogin(req, res, next) {
    let googleToken = req.headers.google_token;
    let first_name = req.headers.first_name;
    let last_name = req.headers.last_name;
    let password = process.env.DEFAULT_GOOGLE_PASSWORD;
    console.log(password);
    let email = null;
    let newUser = false;

    verificationGoogle(googleToken)
      .then(payload => {
        email = payload.email;
        return User.findOne({
          where: {
            email
          }
        });
      })
      .then(user => {
        if (user) {
          return user;
        } else {
          newUser = true;
          return User.create({
            first_name,
            last_name,
            email,
            password
          });
        }
      })
      .then(user => {
        let code = newUser ? 201 : 200;

        let token = generateToken({
          id: user.id,
          email: user.email
        });

        res.status(code).json({
          UserId: user.id,
          token
        });
      })
      .catch(err => {
        return next(err);
      });
  }
}

module.exports = UserController;
