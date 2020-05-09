const axios = require('axios')
const {User} = require('../models')
const {comparePassword} = require('../helper/bcrypt')
const {generateToken} = require('../helper/jwt')

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
        axios.get(`https://developers.zomato.com/api/v2.1/search?count=15&lat=-6.2132172&lon=106.8207167&radius=500&cuisines=235&sort=real_distance`,{
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
                        url: result[i].restaurant.url
                    }
                    listRestaurant.push(temp)
                }

                res.status(200).json({
                    restaurants: listRestaurant
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    msg: 'internal server err'
                })
            })
    }
}

module.exports = Controller