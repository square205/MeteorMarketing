Router.configure({
	layoutTemplate: "clientLayout"
});

Router.map(function(){
	//admin
	this.route("adminHome", {
		path: "/admin",
		layoutTemplate: "adminLayout"
	});
	this.route("adminDataUpload", {
		path: "/admin/data-upload",
		layoutTemplate: "adminLayout"
	});
	this.route("adminChat", {
		path: "/adminChat/:businessId?",
		layoutTemplate: "adminLayout"
	});
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
});