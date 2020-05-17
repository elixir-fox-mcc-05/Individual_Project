const router = require('express').Router();
const userRoute = require('./user.js');
const playerRoute = require('./player.js');
const teamRoute = require('./team.js');

router.use('/users', userRoute);
router.use('/players', playerRoute);
router.use('/teams', teamRoute);

module.exports = router;