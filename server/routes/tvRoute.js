const express = require('express');
const router = express.Router();
const TvController = require('../controllers/TvController.js');
const axios = require('axios');

router.get('/popular', TvController.showPopular);
router.get('/toprated', TvController.showTopRated);
router.get('/onair', TvController.showOnAir);
router.get('/airingtoday', TvController.showAiringToday);

module.exports = router;