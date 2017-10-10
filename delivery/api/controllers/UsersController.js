/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function(req, res){
		Users.find({}).exec(function(err, users){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('backend/users/list', {users: users});
		});
	},
	add:function(req, res){
		res.locals.flash = _.clone(req.session.flash);
		res.view('backend/users/add');
		req.session.flash = {};
	},
	create:function(req, res){
		Users.create(req.params.all(), function userCreated(err, user){
			if(err) {
				console.log(err);
				req.session.flash = { err: err };
				return res.redirect('/users/add');
			}
			res.redirect('/users');
			req.session.flash = {};
		});
	},
	list:function(req, res){
		Users.find({}).exec(function(err, users){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('backend/users/list', {users: users});
		});
	},
	edit:function(req, res){
		Users.findOne({id:req.params.id}).exec(function(err, user){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('backend/users/edit', {user: user});
		});
	},
	update: function(req, res){
		var id = req.body.id;
		var email = req.body.email;
		var name = req.body.fullname;
		var password = req.body.password;
		Users.update({id:id}, {name: name, email:email, password: password}).exec(function(err){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.redirect('/users');
		});
		return false;
	},
	delete: function(req, res){
		Users.destroy({id:req.params.id}).exec(function(err){
			if(err){
				res.send(500, {error: 'Database Error'});
			}
			res.redirect('/users');
		});
	},
	login:function(req, res){
		res.view('backend/login');
	},
	auth:function(req, res){

	}
};

