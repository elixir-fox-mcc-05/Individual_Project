const axios = require('axios')
const baseAPIUrl = 'https://api.themoviedb.org/3'
const api_key = process.env.API_KEY

class DashboardController {
    static getPopularMovies(req, res, next) {
        let {page} = req.body
        axios({
            method: 'get',
            url: `${baseAPIUrl}/movie/popular?api_key=${api_key}&language=en-US&page=${page}`,
        })
            .then(response => {
                res.status(200).json({
                    PopularMovieList: response.data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static getTopRatedMovies(req, res, next) {
        let {page} = req.body
        axios({
            method: 'get',
            url: `${baseAPIUrl}/movie/top_rated?api_key=${api_key}&language=en-US&page=${page}`,
        })
            .then(response => {
                res.status(200).json({
                    TopRatedMovieList: response.data
                })
            })
            .catch(err => {
                next(err)
            })

    }

    static getNowPlayingMovies(req, res, next) {
        let {page} = req.body
        axios({
            method: 'get',
            url: `${baseAPIUrl}/movie/now_playing?api_key=${api_key}&language=en-US&page=${page}`,
        })
            .then(response => {
                res.status(200).json({
                    NowPlayingMovieList: response.data
                })
            })
            .catch(err => {
                next(err)
            })

    }

    static getMovieDetail(req, res, next) {
        let {id} = req.params
        axios({
            method: 'get',
            url: `${baseAPIUrl}/movie/${id}?api_key=${api_key}&language=en-US`,
        })
            .then(response => {
                res.status(200).json({
                    MovieDetail: response.data
                })
            })
            .catch(err => {
                next(err)
            })

    }

    static getPopularTvSeries(req, res, next) {
        let {page} = req.body
        axios({
            method: 'get',
            url: `${baseAPIUrl}/tv/popular?api_key=${api_key}&language=en-US&page=${page}`,
        })
            .then(response => {
                res.status(200).json({
                    PopularTvSeriesList: response.data
                })
            })
            .catch(err => {
                next(err)
            })

    }

    static getTopRatedTvSeries(req, res, next) {
        let {page} = req.body
        axios({
            method: 'get',
            url: `${baseAPIUrl}/tv/top_rated?api_key=${api_key}&language=en-US&page=${page}`,
        })
            .then(response => {
                res.status(200).json({
                    TopRatedTvSeriesList: response.data
                })
            })
            .catch(err => {
                next(err)
            })

    }

    static getNowPlayingTvSeries(req, res, next) {
        let {page} = req.body
        axios({
            method: 'get',
            url: `${baseAPIUrl}/tv/on_the_air?api_key=${api_key}&language=en-US&page=${page}`,
        })
            .then(response => {
                res.status(200).json({
                    NowPlayingTvSeriesList: response.data
                })
            })
            .catch(err => {
                next(err)
            })

    }

    static getTvSeriesDetail(req, res, next) {
        let {id} = req.params
        axios({
            method: 'get',
            url: `${baseAPIUrl}/tv/${id}?api_key=${api_key}&language=en-US`,
        })
            .then(response => {
                res.status(200).json({
                    TvSeriesDetail: response.data
                })
            })
            .catch(err => {
                next(err)
            })

    }

}

module.exports = DashboardController