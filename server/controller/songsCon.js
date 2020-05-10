let axios = require('axios')

class songCon{
    static getSongs(req,res) {
        axios({
            "method":"GET",
            "url":"	https://data.kemkes.go.id/data",
            })
            .then((response)=>{
                res.send(response)
            console.log(response)
            })
            .catch((error)=>{
                res.send(error)
                console.log(error)
            })
    }

}

module.exports = songCon