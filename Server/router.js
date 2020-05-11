const router = require("express").Router()

//middlewares
const authentication = require('./middlewares/authetication')
const authorization = require('./middlewares/authorization')

//Controller refrence
const Controller = require("./controllers/song")
const UserController = require("./controllers/user")
const SpotifyController = require('./controllers/spotify')

//Todo's Controller
router.get("/songs",authentication, Controller.findAll)
router.post("/songs",authentication, Controller.add)
router.get("/songs/:id",authentication, Controller.search)
router.put("/songs/:id",authentication, authorization,  Controller.update)
router.delete("/songs/:id",authentication, authorization, Controller.delete)

//User's Controller
router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.post('/googleSign', UserController.googleSign)

//Holiday's Controller
router.get('/playlist/:username', SpotifyController.playlist)

module.exports = router