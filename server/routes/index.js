const router = require('express').Router()
const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post('/google-signin', Controller.google_signin)

// url
router.post('/search_song', authentication, Controller.search_song)
router.post('/recent', authentication, Controller.recent)

module.exports = router