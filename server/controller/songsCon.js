let axios = require('axios')

class songCon{
    static getSongs(req,res) {
        axios({
            method:"GET",
            url:"https://theaudiodb.com/api/v1/json/5d656564694f534d656564/mostloved.php?format=track&format=track",
            })
            .then(response=>{
                let playlist = response.data
                res.status(200).json({
                    playlist
                })
            })
            .catch(error=>{
                console.log(error)
                res.status(500).json({
                    error : 'internal server error'
                })
            })
    }

}

module.exports = songCon