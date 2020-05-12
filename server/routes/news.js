const router = require('express').Router()
const NewsController = require('../controllers/news')
const authentication= require('../middlewares/authentication')

router.use(authentication)
router.get('/global', NewsController.globalNews)
router.get('/indo', NewsController.indoNews)
router.get('/covid', NewsController.covidNews)

module.exports = router