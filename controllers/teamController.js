var Team = require('../models/team');

// Display list of all Teams.
exports.team_list = function(req, res, next) {
    Team.find({}, 'name')
        .exec(function (err, teams) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('team_list', {teams: teams });
        });
};
