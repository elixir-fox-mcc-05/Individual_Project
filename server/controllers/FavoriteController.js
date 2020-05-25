const { Favorite } = require('../models/index');

class FavoriteController {
    // router.post('/', FavoriteController.addFavorite);
    static addFavorite(req, res, next){
        let { name } = req.body
        let input = {
            name,
            userId: Number(req.currentUserId)
        }
        let options = {
            where: {
                userId: Number(req.currentUserId),
                name
            }
        }
        Favorite.findOne(options)
            .then(data => {
                if(data){
                    return next({
                        name: 'BadRequest',
                        errors: [{
                            message: `${name} already in your favorite`
                        }]
                    })
                }
                else {
                    return Favorite.create(input)
                        .then(data => {
                            return res.status(201).json({
                                favorite: data
                            })
                        })
                }
            })
            .catch(err => {
                return next(err);
            })
    }

    // router.get('/', FavoriteController.readFavorite);
    static readFavorite(req, res, next){
        let options = {
            where: {
                userId: req.currentUserId
            },
            order: [['createdAt', 'ASC']]
        }
        Favorite.findAll(options)
            .then(data => {
                res.status(200).json({
                    favorite: data
                })
            })
            .catch(err => {
                return next(err)
            })
    }

    // router.delete('/:favoriteId', authorization, FavoriteController.deleteFavorite);
    static deleteFavorite(req, res, next){
        let { favoriteId } = req.params;
        let options = {
            where: {
                id: Number(favoriteId)
            },
            returning: true
        }
        Favorite.destroy(options)
            .then(_ => {
                return res.status(200).json({
                    message: `Favorite with id ${favoriteId} delete`
                })
            })
            .catch(err => {
                return next(err);
            })
    }
}

module.exports = FavoriteController;