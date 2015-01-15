BusinessMessages = new Mongo.Collection("businessMessages", {
  transform : function(doc) {return new ModelBusinessMessage (doc)}
});

ModelBusinessMessage = function(doc) {
  _.extend(this, doc);
}

_.extend(ModelBusinessMessage.prototype, {
  from: function(){
  	if(this.fromId === "square205"){
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
	toId: {
		type: String
	},
	fromId: {
		type: String
	},
	sentDate: {
		type: Date
	},
	message: {
		type: String
	}
}));