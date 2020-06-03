const axios = require("axios")

class movieController{
    static getNowPlayingMovies(req,res,next){
        return axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.APIKEY_TMDB}&language=en-US&page=1`
        })
        .then(result => {
            // console.log("================")
            // console.log(result.data.results)
            // console.log("================")
            const top10NowPlaying = []
            for (let i = 0; i < 9; i++) {
                top10NowPlaying.push(result.data.results[i])
            }
            res.status(200).json({
                message:"Top 10 Now Playing Successfully read",
                movies:top10NowPlaying
            })
        })
        .catch(error => {
            // console.log("-----------------------")
            // console.log(error)
            // console.log("-----------------------")
            res.status(500).json({
                message:'Internal Server Error',
                error
            })
        })
    }
}

module.exports = movieController