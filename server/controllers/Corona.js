const axios = require('axios')
class Corona {
  static getAll(req, res, next) {
    axios({
        method: 'GET',
        url: 'https://covid19.mathdro.id/api'
      })
      .then(data => {
        // console.log(data.data);
        let result = data.data
        return res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })
  }

  static getCountry(req, res, next) {
    axios({
        method: 'GET',
        url: 'https://api.covid19api.com/summary'
      })
      .then(data => {
        let result = data.data
        return res.status(200).json({ result })
      })
      .catch(err => {
        next(err)
      })
  }

  static getNews(req, res, next) {
    let key = process.env.NEWS_APIKEY
    axios({
        method: 'GET',
        url: 'http://newsapi.org/v2/top-headlines?country=id&apiKey=' + key
      })
      .then(data => {
        // console.log(data.data.articles);
        let result = data.data.articles
        return res.status(200).json(result)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = Corona