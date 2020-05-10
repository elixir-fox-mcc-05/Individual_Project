let { User } = require('../models')
let { generateToken } = require('../helpers/jwt.js')
let { comparePassword } = require('../helpers/bcrypt.js')

class UserCon {

    static register (req,res) {
        let { email , password , confirm_password } = req.body
        console.log(req.body)
        if( !email || !password || !confirm_password ) {
            res.status(400).json({
                error : "please fill all the fields"
            })
        } else if (password!=confirm_password) {
            res.status(400).json({
                error : "password and confirm password didn't match"
            })
        } 
        else {
            User.create({
                email,
                password
            })
            .then(result=>{
                res.status(201).json({
                    msg : 'register complete',
                })
            })
            .catch(err=>{
                let error = err.errors[0].message
                res.status(500).json({
                    error
                })
            })
        }
    }

    static login (req,res) {
        User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(result => {
            if (result) {
                let checkPass = comparePassword(req.body.password,result.password)
                if(checkPass) {
                    let obj = {
                        id : result.id,
                        email : result.email
                    }
                    let token = generateToken(obj)
                    res.status(201).json({
                        token
                    })
                } else {
                    res.status(400).json({
                        error : 'wrong email/password'
                    })
                }
            } else {
                res.status(400).json({
                    error : 'wrong email/password'
                })
            }
        })
        .catch(err=>{
            res.status(400).json({
                error : 'wrong email/password'
            })
        })
    }

}


module.exports = UserCon