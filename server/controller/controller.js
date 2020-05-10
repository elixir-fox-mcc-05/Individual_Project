const axios = require('axios')
const {User} = require('../models')
const {comparePassword} = require('../helper/bcrypt')
const {generateToken} = require('../helper/jwt')
const verificationGoogle = require('../helper/Oauth')

class Controller{
    static login(req, res){
        let {email, password} = req.body
        User.findOne({where: {email}})
            .then(data => {
                if(data){
                    let compare = comparePassword(password, data.password)
                    if(compare){
                        let {id, email, password} = data
                        let access_token = generateToken({
                            id,
                            email,
                            password
                        })
                        res.status(200).json({
                            access_token
                        })
                    } else {
                        res.status(400).json({
                            msg: 'password not match'
                        })
                    }
                } else {
                    res.status(400).json({
                        msg: 'invalid email'
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    msg: `internal server error`
                })
            })
    }

    static aroundMCC(req, res){
        let listRestaurant = []
        axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=11052&entity_type=city&count=15&cuisines=90&sort=rating`,{
            headers: {
                "user-key": process.env.API_KEY
            }
        })
            .then(response => {
                let result = response.data.restaurants
                for (let i = 0; i < result.length; i++) {
                    let temp = {
                        name: result[i].restaurant.name,
                        address: result[i].restaurant.location.address,
                        img: result[i].restaurant.featured_image,
                        cost: result[i].restaurant.average_cost_for_two
                    }
                    listRestaurant.push(temp)
                }

                res.status(200).json({
                    restaurants: listRestaurant
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'internal server err'
                })
            })
    }

    static googleLogin(req, res){
        let {google_token} = req.headers
        let email = null
        let newUser= false

        verificationGoogle(google_token)
            .then(payload => {
                email = payload.email
                return User.findOne({where: {email}})
            })
            .then(user => {
                if(user){
                    return user
                } else {
                    newUser = true
                    return User.create({
                        email,
                        password: process.env.DEFAULT_GOOGLE_PASS
                    })
                }
            })
            .then(user => {
                let code = newUser ? 201 : 200
                let { id, email, password } = user
                let access_token = generateToken({
                    id,
                    email,
                    password
                })

                res.status(code).json({
                    access_token
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = Controller