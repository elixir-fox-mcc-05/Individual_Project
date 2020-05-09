const { User } = require('../models/index');
const { checkPassword } = require('../helpers/bcryptjs');
const { generateToken } = require('../helpers/jwt');

class UserController {
    // router.post('/register', UserController.registerUser);
    static registerUser(req, res, next){
        let { name, email, password } = req.body;
        let input = {
            name,
            email,
            password
        };
        User.create(input)
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    name: data.name,
                    email: data.email
                });
            })
            .catch(err => {   
               next(err);
            })
    }

    // router.post('/login', UserController.loginUser);
    static loginUser(req, res, next){
        let { email, password } = req.body;
        let options = {
            where: {
                email
            }
        }
        User.findOne(options)
            .then(data => {
                if(data){
                    let compare = checkPassword(password, data.password);
                    if (compare) {
                        let token = generateToken({
                            id: data.id,
                            name: data.name,
                            email: data.email
                        })
                        res.status(201).json({
                            token,
                            id: data.id,
                            name: data.name,
                            email: data.email
                        })
                    }
                    else {
                        throw next({
                            name: `BadRequest`,
                            errors: [{
                                message: `Invalid E-Mail/Password`
                            }]
                        })
                    }
                }
                else {
                    throw next({
                        name: `BadRequest`,
                        errors: [{
                            message: `Invalid E-Mail/Password`
                        }]
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController;