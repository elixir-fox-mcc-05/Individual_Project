const router = require('express').Router();
const userRouter = require('./user.js');
const animeRouter = require('./anime.js');

router.get('/', (req, res) => {
  res.json(200).json({
    message: `Anime Apps API`
  });
});
router.use('/', userRouter);
router.use('/anime', animeRouter);

module.exports = router;
