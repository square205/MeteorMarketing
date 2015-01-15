TargetDomains = new Mongo.Collection("targetDomains");

var defaultTargetDomains = [
	{
		label: "Design"
	}
]

Meteor.startup(function(){
	if(TargetDomains.findOne()){
		_.each(defaultTargetDomains, function(defaultTargetDomain){
			TargetDomains.insert(defaultTargetDomain);
		})
	}
});