// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { commonParms } from '../both/commonParms.js';

const usersList = [
	{email:"dev@orange.com", 	alias: "DEV", 		password:"devdev",		roles:["DEV"]},
	{email:"admin@orange.com", 	alias: "ADMIN",		password:"adminadmin",	roles:["ADMIN"]},

];


Meteor.startup(() => {
	// Roles creation -------------------------------
	commonParms.roles.map(function(role) {
		Roles.createRole(role.value, {unlessExists: true});	
	});

	// Users creation -------------------------------
	if (Meteor.users.find().count() === 0) {
		usersList.map(function(user) {
			var userId = Accounts.createUser(
				{
					"email": 		user.email,
					"password" : 	user.password
				}
			);
			Meteor.users.update(
				{_id: userId }, 
				{ $set: {
						'profile.alias' : user.alias
					}
				}
			);
			Roles.setUserRoles(userId, user.roles);
			console.log("User "+ user.email + " created.");
		});
	}
	else console.log("Initial users already created.");
});
