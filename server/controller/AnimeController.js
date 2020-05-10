"use strict";
const {Anime} = require("../models");
const {User} = require("../models");
const axios = require("axios");

class AnimeController{
    static findAll(req, res, next){
        const UserId = req.currentUser;
        Anime
            .findAll({
                where : {
                    UserId,
                },
                include : User,
                order : [["id", "DESC"]]
            })
            .then(result => {
                res.status(200).json({
                    Anime : result
                });
            })
            .catch(err => {
                next(err);
            });
    }

    static findOne(req, res, next){
        const {id} = req.params;
        Anime
            .findByPk(id)
            .then(anime => {
                res.status(200).json({
                    Anime : anime
                });
            })
            .catch(err => {
                next(err);
            });
    }

    static create(req, res, next){
        const {title, episode, mal_id, image_url, genre, rating, url} = req.body;
        const UserId = req.currentUser;
        const value = {
            title, episode, mal_id, image_url, genre, rating, url,
            UserId
        };
        Anime
            .create(value)
            .then(result => {
                res.status(201).json({
                    Anime : result,
                });
            })
            .catch(err => {
                next(err);
            });
    }

    static delete(req, res, next){
        const {id} = req.params;
        Anime
            .destroy({
                where : {
                    id
                }
            })
            .then(result => {
                res.status(200).json({
                    msg : `Succes destroy anime with id ${id}`
                });
            })
            .catch(err => {
                next(err);
            });
    }
    static top(req, res, next){
        axios({
            url : "https://api.jikan.moe/v3/top/anime/1/airing",
            method : "get"
        })
            .then(data =>{
                res.status(200).json({
                    Anime : data.data
                });
            })
            .catch(err => {
                return next(err);
            });
    }
    static Watched(req, res, next){
        const {id} = req.params;
        const {status} = req.body;
        const value = {
            status,
        };
        Anime
            .update(value, {
                where : {
                    id,
                }
            })
            .then(result => {
                res.status(200).json({
                    Anime : result
                });
            })
            .catch(err => {
                next(err);
            });
    }
}

module.exports = AnimeController;