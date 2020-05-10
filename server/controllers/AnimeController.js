const axios = require('axios');
const baseUrl = 'https://api.jikan.moe/v3';
const { UserAnime } = require('../models');

class AnimeController {
  static findAll(req, res, next) {
    axios
      .get(`${baseUrl}/search/anime?producer=21&type=movie`)
      .then(response => {
        res.status(200).json({
          anime: response.data.results
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static addFavorite(req, res, next) {
    let UserId = req.UserId;
    let AnimeId = req.params.id;

    UserAnime.create({
      UserId,
      AnimeId
    })
      .then(data => {
        res.status(201).json({
          UserAnime: data
        });
      })
      .catch(err => {
        return next(err);
      });
  }
}

module.exports = AnimeController;
