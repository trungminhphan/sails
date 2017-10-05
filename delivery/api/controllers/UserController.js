/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:function(req, res){
		res.view('backend/user/list');
	},
	edit:function(req, res){
		res.view('backend/user/edit');
	}
};

