const axios = require('axios');
const api_key = '?api_key=7d82977f0378c4e78b8dfd8d7e500671';
const languange = '&language=en-US';
const link = 'https://api.themoviedb.org/3/movie/';

class MovieController {
	static nowPlaying(req, res, next) {
		let urlParam = 'now_playing';
		axios
			.get(link + urlParam + api_key + languange)
			.then((data) => {
				res.status(200).json({
					NowPlayingMovies: data.data.results
				});
			})
			.catch((err) => next(err));
	}

	static popular(req, res, next) {
		let urlParam = 'popular';
		axios
			.get(link + urlParam + api_key + languange)
			.then((data) => {
				res.status(200).json({
					PopularMovies: data.data.results
				});
			})
			.catch((err) => {
				next(err);
			});
	}

	static upcoming(req, res, next) {
		let urlParam = 'upcoming';
		axios
			.get(link + urlParam + api_key + languange)
			.then((data) => {
				res.status(200).json({
					UpcomingMovies: data.data.results
				});
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = MovieController;
