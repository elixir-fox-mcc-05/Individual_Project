const { User, Team, Player } = require('../models');

module.exports = {
    authorizeTeamOwner: (req, res, next) => {
        const id = req.params.id ? req.params.id : req.params.team_id;
        Team
            .findByPk(id)
            .then(team => {
                if(team) {
                    if (team.UserId === req.userId) {
                        next();
                    } else {
                        throw {
                            msg: 'You do not have the authority to do this action',
                            code: 401
                        }
                    }
                } else {
                    throw {
                        msg: `no team with id ${id}`,
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    },
    authorizePlayerOwner: (req, res, next) => {
        const { id } = req.params;

        Player
            .findByPk(id, {
                include: {
                    model: Team,
                    include: {
                        model: User,
                        attributes: {
                            exclude: ['password', 'createdAt', 'updatedAt']
                        }
                    }
                }
            })
            .then(player => {
                if(player) {
                    if(player.Team.UserId === req.userId) {
                        next();
                    } else {
                        throw {
                            msg: 'You do not have the authority to do this action',
                            code: 401
                        }
                    }
                } else {
                    throw {
                        msg: `no player with id ${id}`,
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }
}