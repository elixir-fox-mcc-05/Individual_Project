const { User, Team, Player } = require('../models');
const axios = require('axios');

class PlayerController{
    static addPlayer(req, res, next) {
        const TeamId = req.params.team_id;
        const { name, position, status, team } = req.body;

        Player
            .create({
                name,
                position,
                status,
                team,
                TeamId
            })
            .then(player => {
                res.status(201).json({
                    player
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deletePlayer(req, res, next) {
        const { id } = req.params;

        Player
            .destroy({
                where: {
                    id
                }
            })
            .then(() => {
                res.status(200).json({
                    msg: `success delete player with id ${id}`
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static fetchNFLPlayer(req, res, next) {
        const { position, team } = req.params;
        let lists = [];

        axios(`https://www.fantasyfootballnerd.com/service/players/json/${process.env.NERDS_API}/${position}/`)
            .then(results => {
                results.data.Players.forEach(player => {
                    if(player.team === team) {
                        lists.push(player);
                    }
                })
                res.status(200).json({
                    player: lists
                })
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = PlayerController;
