/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res){
		User.find({}).exec(function(err, users){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('backend/user/list', {users: users});
		});
	},
	add:function(req, res){
		res.view('backend/user/add');
	},
	list:function(req, res){
		User.find({}).exec(function(err, users){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('backend/user/list', {users: users});
		});
	},
	edit:function(req, res){
		User.findOne({id:req.params.id}).exec(function(err, user){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('backend/user/edit', {user: user});
		});
	},
	update: function(req, res){
		var id = req.body.id;
		var email = req.body.email;
		var name = req.body.fullname;
		var password = req.body.password;

		User.update({id:id}, {name: name, email:email, password: password}).exec(function(err){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.redirect('/user');
		});
		return false;
	},
	delete: function(req, res){
		User.destroy({id:req.params.id}).exec(function(err){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.redirect('/user');
		});
	}
};

