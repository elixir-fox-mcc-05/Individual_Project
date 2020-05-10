const { User, Team, Player } = require('../models');
const axios = require('axios');

class TeamController{
    static createTeam(req, res, next) {
        const { name } = req.body;
        const UserId = req.userId;

        Team
            .create({
                name,
                UserId
            })
            .then(team => {
                res.status(201).json({
                    team
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static getAllTeam(req, res, next) {

        Team
            .findAll({
                include: [User, Player]
            })
            .then(teams => {
                res.status(200).json({
                    teams
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static getMyTeam(req, res, next) {
        const UserId = req.userId;

        Team
            .findAll({
                where: {
                    UserId
                },
                include: [User, Player]
            })
            .then(teams => {
                res.status(200).json({
                    teams
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static getTeamById(req, res, next) {
        const { id } = req.params;

        Team
            .findOne({
                where: {
                    id
                },
                include: [Player]
            })
            .then(team => {
                res.status(200).json({
                    team
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static getAllNFLTeam(req, res, next) {
        
        axios.get(`https://www.fantasyfootballnerd.com/service/nfl-teams/json/${process.env.NERDS_API}/`)
            .then(results =>{
                res.status(200).json({
                    teams: results.data
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteTeam(req, res, next) {
        const { id } = req.params;

        Team
            .destroy({
                where: {
                    id
                }
            })
            .then(() => {
                res.status(200).json({
                    msg: `success delete team with id ${id}`
                })
            })
            .catch(err => {
                next(err);
            })

    }
}

module.exports = TeamController;
