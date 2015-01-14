Businesses = new Mongo.Collection("businesses", {
  transform : function(doc) {return new ModelBusiness (doc)}
});

ModelBusiness = function(doc) {
  _.extend(this,doc);
}

_.extend(ModelBusiness.prototype, {
  messages: function(){
  	return BusinessMessages.find({businessId: this._id});
  }
});

Businesses.attachSchema(new SimpleSchema({
	hasVisitedLink: {
		type: Boolean,
		optional: true
	},
	companyName: {
		type: String
	},
	companySlug: {
		type: String
	},
	companyEmail: {
		type: String
	},
	companyResponseChance: {
		type: String
	}
}));