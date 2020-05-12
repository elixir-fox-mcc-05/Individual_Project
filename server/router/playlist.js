let playlistRouter = require('express').Router()
let PlaylistCon = require('../controller/playlistCon')

playlistRouter.get('/',PlaylistCon.show)
playlistRouter.post('/',PlaylistCon.add)


module.exports = playlistRouter