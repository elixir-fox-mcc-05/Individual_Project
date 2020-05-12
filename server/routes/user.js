const UserController = require('../controllers/UserController.js');
const router = require('express').Router();
const authentication = require('../middlewares/authentication.js');

router.get('/users', UserController.findAll);
router.get('/user', authentication, UserController.findOne);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/google-login', UserController.googleLogin);

module.exports = router;
