const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController.js');

router.get('/', dataController.fetchRestaurant);
router.get('/wtc', dataController.randomFood);

module.exports = router;