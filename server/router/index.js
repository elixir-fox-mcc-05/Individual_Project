let router = require('express').Router()
let songsCon = require('../controller/songsCon.js')
let PlaylistCon = require('../controller/playlistCon.js')
let userRoutes  = require('./user.js')
let playlistRouter = require('./playlist.js')
let songRoutes = require('./song.js')
let authentication = require('../middlewares/authentication.js')

router.get('/',(req,res)=>{
    res.send('massuk')
})
router.use('/user',userRoutes)
router.use(authentication)
router.use('/playlist',playlistRouter)
router.use('/songs',songRoutes)



module.exports = router