const express = require('express')
const router = express.Router()
const movieController = require("../controllers/movieController")
const authentication = require("../middlewares/authentication.js")

router.get('/nowPlaying', authentication, movieController.getNowPlayingMovies)
// router.get('/')

module.exports = router