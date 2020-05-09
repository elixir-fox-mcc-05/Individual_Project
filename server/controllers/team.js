const { User, Team, Player } = require('../models');

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
