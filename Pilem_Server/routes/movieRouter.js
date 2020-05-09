const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/movieController.js');
const authentication = require('../middlewares/authentication.js');

router.use(authentication);
router.get('/nowplaying', MovieController.nowPlaying);
router.get('/popular', MovieController.popular);
router.get('/upcoming', MovieController.upcoming);

module.exports = router;
