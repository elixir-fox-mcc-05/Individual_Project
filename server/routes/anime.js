const AnimeController = require('../controllers/AnimeController.js');
const router = require('express').Router();
const authentication = require('../middlewares/authentication.js');

router.get('/', AnimeController.findAll);
router.post('/favorite/:id', authentication, AnimeController.addFavorite);

module.exports = router;
