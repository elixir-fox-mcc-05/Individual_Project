const router = require("express").Router()

const MovieController = require("../controllers/movieController")

router.get("/popular", MovieController.showPopular)
router.get("/upcoming", MovieController.showUpcoming)
router.get("/toprate", MovieController.showToprate)
router.get("/detail/:id", MovieController.showDetail)

module.exports = router;