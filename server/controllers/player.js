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
        const { position } = req.params;

        axios(`https://www.fantasyfootballnerd.com/service/players/json/${process.env.NERDS_API}/${position}/`)
            .then(results => {
                res.status(200).json({
                    player: results.data
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static topProspect(req, res, next) {
        axios(`https://www.fantasyfootballnerd.com/service/draft-rankings/json/${process.env.NERDS_API}/1/`)
            .then(results => {
                console.log(results);
                let ranks = [];
                results.data.DraftRankings.forEach(player => {
                    let prospect = {
                        name: player.displayName,
                        position: player.position,
                        team: player.team,
                        rank: player.overallRank
                    };
                    ranks.push(prospect);
                })
                res.status(200).json({
                    ranks
                })
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = PlayerController;
