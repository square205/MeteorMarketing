Router.map(function(){
	this.route("home", {
		path: "/:businessId?"
	});
	this.route("aboutUs", {
		path: "/about-us/:businessId?"
	});
	this.route("talkToUs", {
		path: "/talk-to-us/:businessId?"
	});
});