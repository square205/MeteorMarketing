Meteor.startup(function(){
	if(!Meteor.users.findOne()){
		Accounts.createUser({
	    username: 'square205',
	    password: 'default'
	  });
	}
})