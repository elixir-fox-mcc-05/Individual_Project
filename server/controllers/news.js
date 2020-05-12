const axios = require('axios')

class NewsController{
    static globalNews(req, res, next){
        axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.API_KEY}`)
        .then(result => {
            result = result.data.articles
            return res.status(200).json({
                result
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static indoNews(req, res, next){
        axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.API_KEY}`)
        .then(result => {
            result = result.data.articles
            return res.status(200).json({
                result
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static covidNews(req, res, next){
        axios.get(`https://corona.lmao.ninja/v2/countries/id?yesterday=true&strict=true&query`)
        .then(result => {
            return res.status(200).json({
                result: result.data
            })
        })
        .catch(err => {
            return next(err)
        })
    }
}

module.exports = NewsController