const Model = require('../models')
const Movie = Model.Movie
const axios = require('axios')
class MovieController {
    static getAction(req, res) {
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.apiKEY}&s=action`)
        .then(data => {
            res.status(200).json({Movie : data.data.Search})
        })
        .catch(err => {
            console.log(err)
        })
    }
    static getDrama(req, res) {
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.apiKEY}&s=drama`)
        .then(data => {
            res.status(200).json({Movie : data.data.Search})
        })
        .catch(err => {
            console.log(err)
        })
    }
    static getAnime(req, res) {
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.apiKEY}&s=anime`)
        .then(data => {
            res.status(200).json({Movie : data.data.Search})
        })
        .catch(err => {
            console.log(err)
        })
    }
    static getRomance(req, res) {
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.apiKEY}&s=romance`)
        .then(data => {
            res.status(200).json({Movie : data.data.Search})
        })
        .catch(err => {
            console.log(err)
        })
    }



}


module.exports = MovieController;