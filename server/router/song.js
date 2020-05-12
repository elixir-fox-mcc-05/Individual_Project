let songsRoutes = require('express').Router()
let SongCon = require('../controller/songsCon.js')

songsRoutes.get('/',SongCon.getSongs)


module.exports = songsRoutes