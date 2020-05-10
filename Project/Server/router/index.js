const router = require('express').Router()
const UserController = require('../controller/user.js')
const MovieController = require('../controller/movie.js')
const {authentication} = require('../middleware/authentication.js')


//User
router.post('/users/register', UserController.register);
router.post('/users/login', UserController.logIn);
//Movie
router.use(authentication)
router.get('/movies/action', MovieController.getAction);
router.get('/movies/anime', MovieController.getAnime);
router.get('/movies/drama', MovieController.getDrama);
router.get('/movies/romance', MovieController.getRomance);



module.exports = router;