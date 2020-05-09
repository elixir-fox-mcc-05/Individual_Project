const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')
const { authentication } = require('../middlewares/authentication')

// router.use(authentication)
router.post('/movie/popular', dashboardController.getPopularMovies)
router.post('/movie/top_rated', dashboardController.getTopRatedMovies)
router.post('/movie/now_playing', dashboardController.getNowPlayingMovies)
router.get('/movie/:id', dashboardController.getMovieDetail)
router.post('/tv/popular', dashboardController.getPopularTvSeries)
router.post('/tv/top_rated', dashboardController.getTopRatedTvSeries)
router.post('/tv/now_playing', dashboardController.getNowPlayingTvSeries)
router.get('/tv/:id', dashboardController.getTvSeriesDetail)

module.exports = router