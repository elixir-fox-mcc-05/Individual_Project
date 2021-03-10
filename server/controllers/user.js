let { User } = require('../models/index')
let { compare } = require('../helpers/bycrypt')
let { jwtToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

class UserController {
    static register (req,res) {
        let data = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(data)
        .then((result) => {
            res.status(200).json({
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                msg: 'internal error'
            })
        });
    } 

    static login (req, res, next) {
      console.log('masukkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkloginnnnnnnnnnnnnnnnnnnnnnnnnnn');
      console.log(req.body);
      let email = req.body.email
      let password = req.body.password
      User.findOne({where : {email : email}})
      .then((user) => {
          if (!user) {
              throw {
                  msg : 'wrong email / password',
                  code : 401
              }
          } else if (!compare(req.body.password, user.password)) {
              console.log(password, user.password);
              throw {
                  msg : 'wrong email / password',
                  code : 401
              }
          } else  {
              let access_token = jwtToken ({
                  id:user.id,
                  email
              })
              next()
              res.status(200).json({
                  access_token
                  
              })
          }
        })
        .catch(err => {
            res.status(err.code).json({
                err
            })
        })
    }
    static googleSign(req, res, next) {
        let client = new OAuth2Client('218707515829-d1ofmk2idnscp2va1cl23e2q5mpugcpf.apps.googleusercontent.com');
        let email = ''
        // console.log(req.body.)
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: '218707515829-d1ofmk2idnscp2va1cl23e2q5mpugcpf.apps.googleusercontent.com'
        })
          .then(ticket => {
            email = ticket.getPayload().email
            return User.findOne({
              where: {
                email: email
              }
            })
          })
          .then(data => {
            if (data) {
              let user = {
                id: data.id,
                email: data.email
              }
              let token = jwtToken(user)
              res.status(200).json({
                access_token: token
              })
            } else {
              return User.create({
                email: email,
                password: process.env.DEFAULT_PASSWORD || 'begitulah'
              })
            }
          })
        .then(data => {
          let user = {
            id: data.id,
            email: data.email
          }
          let token = jwtToken(user)
          console.log('berhasilllllllllllllllllllllll');
          return res.status(201).json({
            id: user.id,
            email: user.email,
            access_token: token
          })
        })
        .catch(err => {
          next(err)
        })
    }
}
module.exports = UserController