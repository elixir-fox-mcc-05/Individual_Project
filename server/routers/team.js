const router = require('express').Router();
const TeamController = require('../controllers/team.js');
const { authenticateUser } = require('../middlewares/authenticaton.js');
const { authorizeTeamOwner } = require('../middlewares/authorization.js');

router.use(authenticateUser);
router.post('/', TeamController.createTeam);
router.get('/', TeamController.getMyTeam);
router.get('/all', TeamController.getAllTeam);
router.get('/nfl', TeamController.getAllNFLTeam);
router.get('/:id', TeamController.getTeamById);
router.delete('/:id', authorizeTeamOwner, TeamController.deleteTeam);

module.exports = router;
