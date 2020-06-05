const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const favoriteRouter = require('./favoriteRouter');

router.get('/', (req, res) => {
    res.status(200).json({
        message: `Individual project working`
    })
})
router.use('/favorites', favoriteRouter);
router.use('/users', userRouter);

module.exports = router;