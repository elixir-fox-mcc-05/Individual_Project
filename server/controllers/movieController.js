const axios = require("axios");

class MovieController {
  static showPopular(req, res, next) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const { data } = response;
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static showUpcoming(req, res, next) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const { data } = response;
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static showToprate(req, res, next) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        const { data } = response;
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static showDetail(req, res, next) {
    let { id } = req.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
      )
      .then((response) => {
        const { data } = response;
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = MovieController;
