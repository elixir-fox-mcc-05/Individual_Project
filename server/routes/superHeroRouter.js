const router = require("express").Router();
const axios = require("axios");

router.get("/superhero/:id", (req, res, next) => {
  let {id} = req.params
  axios
    .get(`https://superheroapi.com/api/10216416844045774/${id}`, {
      //   headers:{key: value (simpan di env, lalu panggil menggunakan proses.env)} jika diminta key, token taruh di sini
    })
    .then((response) => {
      const { data } = response;
      res.json({
        covids: data,
      });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
