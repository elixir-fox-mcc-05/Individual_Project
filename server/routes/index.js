const express = require('express');
const router = express.Router();
const dashboardRouter = require('./dashboard');
const usersRouter = require('./users.js');

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'connected to server'
    })
});
router.use('/users', usersRouter);
router.use('/dashboard', dashboardRouter);

module.exports = router;
