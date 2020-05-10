const express = require('express');
const router = express.Router();
const TvController = require('../controllers/TvController.js');
const authentication = require('../middlewares/authentication');
const axios = require('axios');

router.post('/search', authentication, TvController.search);
router.get('/popular', authentication, TvController.showPopular);
router.get('/toprated', TvController.showTopRated);


module.exports = router;