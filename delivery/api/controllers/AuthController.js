/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {
	config: {
        actions: false,
        shortcuts: false,
        rest: false
    },
    auth: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.send({
                    message: info.message,
                    user: user
                });
            });

        })(req, res);
        
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    },

    login: function(req, res){
		res.locals.flash = _.clone(req.session.flash);
		res.view('backend/login');
		req.session.flash = {};
	}
};

