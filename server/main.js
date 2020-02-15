// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';

// Roles publication --------------------------------
Meteor.publish(null, function () {
	if (this.userId) {
		return Meteor.roleAssignment.find({ 'user._id': this.userId });
	} 
	else {
		this.ready();
	}
})