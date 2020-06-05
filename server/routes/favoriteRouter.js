const express = require('express');
const router = express.Router();
const FavoriteController = require('../controllers/FavoriteController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.use(authentication);
router.post('/', FavoriteController.addFavorite);
router.get('/', FavoriteController.readFavorite);
router.delete('/:favoriteId', authorization, FavoriteController.deleteFavorite);

module.exports = router;