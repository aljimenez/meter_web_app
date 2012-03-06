var headLinks = {"dashboard": {"title": "Meter Dashboard", "linkName": "Dashboard", "url": "", "page": "dashboard"},
				 "circuits": {"title": "Circuits", "linkName": "Circuits", "url": "circuits", "page": "circuits"},
				 "pricingModels": {"title": "Pricing Models", "linkName": "Pricing Models", "url": "pricingModels", "page": "pricingModels"},
				 "log": {"title": "Log", "linkName": "Log", "url": "log", "page": "log"}};

function changePage(page)
{
	$("#title").text(headLinks[page].title);
	$("#headlinks a").removeClass("btn-primary");
	$("#" + page + "_link").addClass("btn-primary");
}


window.HeadLinksView = Backbone.View.extend({
	initialize: function() {
		$(this.el).addClass("btn-group span6");
	},
	render: function (eventName) {
		for (var section in headLinks)
		{
			var template = _.template($('#headlink').html());
			$(this.el).append(template(headLinks[section]));
		}
			
        return this;
    }
});

// Router
var AppRouter = Backbone.Router.extend({

    routes:{
        "": "dashboard",
        "circuits": "circuitsPage",
        "circuits/:id": "circuit",
        "pricingModels": "pricingModels",
        "pricingModels/:id": "pricingModel",
        "log": "log"
    },
    initialize: function() {
    	this.headLinksView = new HeadLinksView();
    	$('#headlinks').html(this.headLinksView.render().el);
    },
    
    dashboard: function () {
    	changePage("dashboard");
    },
    
    circuitsPage: function() {
    	changePage("circuits");
    	$('#content').html(new CircuitsPageView().render().el);
    },
    
    circuit: function(id) {
    	changePage("circuits");
    	$('#content').html(new CircuitPageView().render(id).el);
    },
    
    pricingModels: function() {
    	changePage("pricingModels");
    	$('#content').html(new PricingModelsPageView().render().el);
    },
    
    pricingModel: function(id) {
    	changePage("pricingModels");
    	$('#content').html(new PricingModelPageView().render(id).el);
    },
    
    log: function() {
    	changePage("log");
    },
});

var app = new AppRouter();
Backbone.history.start();