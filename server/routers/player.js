const router = require('express').Router();
const PlayerController = require('../controllers/player.js');
const { authenticateUser } = require('../middlewares/authenticaton.js');
const { authorizeTeamOwner, authorizePlayerOwner } = require('../middlewares/authorization.js');

router.use( authenticateUser );
router.post('/:team_id', authorizeTeamOwner, PlayerController.addPlayer);
router.delete('/:id', authorizePlayerOwner, PlayerController.deletePlayer);
router.get('/:position', PlayerController.fetchNFLPlayer);
router.get('/prospect', PlayerController.topProspect);

module.exports = router;