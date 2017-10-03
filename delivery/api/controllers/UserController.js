/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:function(req, res){
		res.view('backend/user/list', {'text' : 'Phan Minh Trung'})
	},
	edit:function(req, res){
		res.view('backend/user/edit');
	}
};

