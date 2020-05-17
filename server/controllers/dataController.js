'use strict'

const axios = require('axios');
const API_KEY = require

class DataController {
    static randomFood(req, res, next) {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(result => {
                // console.log(result.data)
                res.status(200).json({food: result.data});
            })
            .catch(err => {
                next({error: err});
            });
    }

    static fetchRestaurant(req, res, next) {
        let restaurantList = []
        axios.get('https://developers.zomato.com/api/v2.1/search?count=40&lat=-6.2132172&lon=106.8207167&radius=5000&sort=real_distance', {
            headers: {
                'user-key': process.env.API_KEY
            }
        })
            .then(result => {
                let data = result.data.restaurants;
                for (let i = 0; i < data.length; i++) {
                    let temp = {
                        name: data[i].restaurant.name,
                        address: data[i].restaurant.location.address,
                        img: data[i].restaurant.featured_image,
                        type: data[i].restaurant.cuisines,
                        timings: data[i].restaurant.timings,
                        averagePrice: data[i].restaurant.average_cost_for_two,
                        ratings: data[i].restaurant.user_rating,
                        etc: data[i].restaurant.highlights,
                    }
                    restaurantList.push(temp)
                }
                res.status(200).json({list: restaurantList})
            })
            .catch(err => {
                next({error: err});
            });
    }
        
}

module.exports = DataController;