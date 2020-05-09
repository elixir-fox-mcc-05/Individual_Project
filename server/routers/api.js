const router = require('express').Router()
const Corona = require('../controllers/Corona')
const authentication = require('../middlewares/authentication')
router.use(authentication)
router.get('/', Corona.getAll)
router.get('/news', Corona.getNews)
router.get('/countries', Corona.getCountry)

module.exports = router