const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieController.js');

router.get('/popular', MovieController.showPopular);
router.get('/toprated', MovieController.showTopRated);
router.get('/nowplaying', MovieController.showNowPlaying);

module.exports = router;