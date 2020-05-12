let { Playlist } = require('../models')

class PlaylistCon {
    static show (req,res) {
        let {user_id} = req.body
        Playlist.findAll({
            where : {
                user_id
            }
        })
        .then(result=>{
            res.status(200).json({
                result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error : 'internal server error'
            })
        })
    }
    static add (req,res) {
        let {name,user_id} = req.body
        Playlist.create({
            name,
            user_id
        })
        .then(result=>{
            res.status(201).json({
                msg : 'successfully creating playlist'
            })
        })
        .catch(err=>{
            res.status(500).json({
                error: 'Unable to create Playlist , internal server error'
            })
        })
    }
}


module.exports = PlaylistCon