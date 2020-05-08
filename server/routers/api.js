const router = require('express').Router()
const Corona = require('../controllers/Corona')

router.get('/', Corona.getAll)
router.get('/news', Corona.getNews)
router.get('/:country', Corona.getCountry)

module.exports = router