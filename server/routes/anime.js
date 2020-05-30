"use strict";
const router = require('express').Router();
const AnimeController = require("../controller/AnimeController");
const Authentication = require("../middlewares/authentication");
const Authorization = require("../middlewares/authorization");

router.use(Authentication);
router.get("/", AnimeController.findAll);
router.post("/", AnimeController.create);
router.get("/top", AnimeController.top);
router.get("/:id", Authorization, AnimeController.findOne);
router.put("/:id", Authorization, AnimeController.Watched);
router.delete("/:id", Authorization, AnimeController.delete);

module.exports = router;