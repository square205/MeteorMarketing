Router.map(function(){
	//client
	this.route("home", {
		path: "/:businessId?"
	});
	this.route("aboutUs", {
		path: "/about-us/:businessId?"
	});
	this.route("talkToUs", {
		path: "/talk-to-us/:businessId?"
	});
	//admin
	this.route("adminHome", {
		path: "/admin"
	});
	this.route("adminChat", {
		path: "/adminChat/:businessId?"
	});
});