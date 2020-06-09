var express = require('express');
var router = express.Router();

var team_controller = require('../controllers/teamController');

router.get('/', team_controller.team_list);

module.exports = router;