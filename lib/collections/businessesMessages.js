BusinessMessages = new Mongo.Collection("businessMessages", {
  transform : function(doc) {return new ModelBusinessMessage (doc)}
});

ModelBusinessMessage = function(doc) {
  _.extend(this, doc);
}

_.extend(ModelBusinessMessage.prototype, {
  business: function(){
  	if(this.businessId === "square205"){
  		return {
  			companyName: "square205",
  			companyEmail: "communicate@square205.com",
  			companySlug: "square205"
  		};
  	}
  	return Businesses.findOne({_id: this.businessId});
  }
});

BusinessMessages.attachSchema(new SimpleSchema({
	businessId: {
		type: String
	},
	to: {
		type: String
	},
	from: {
		type: String
	},
	sentDate: {
		type: Date
	},
	message: {
		type: String
	}
}));