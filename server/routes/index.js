const express = require('express');
const router = express.Router();
const usersRoute = require('./usersRoute.js');
const tvRoute = require('./tvRoute.js');
const movieRoute = require('./movieRoute.js');

router.use('/movie', movieRoute);
router.use('/tv', tvRoute);
router.use('/users', usersRoute);
router.get('/', (req, res) => {
    res.send('Halaman Utama');
})
module.exports = router;