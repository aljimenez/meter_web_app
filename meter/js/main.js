var headLinks = {"dashboard": {"title": "Meter Dashboard", "linkName": "Dashboard", "url": "", "page": "dashboard"},
				 "circuits": {"title": "Circuits", "linkName": "Circuits", "url": "circuits", "page": "circuits"},
				 "pricingModels": {"title": "Pricing Models", "linkName": "Pricing Models", "url": "pricing_models", "page": "pricingModels"}};

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
        "":"dashboard",
        "circuits":"circuits",
        "pricing_models":"pricingModels",
    },
    initialize: function() {
    	this.headLinksView = new HeadLinksView();
    	$('#headlinks').html(this.headLinksView.render().el);
    },
    dashboard: function () {
    	changePage("dashboard");
    },
    
    circuits: function() {
    	changePage("circuits");
    	$('#content').html(new CircuitsTableView().render().el);
    },
    
    pricingModels: function() {
    	changePage("pricingModels");
    	$('#content').html(new PricingModelsTableView().render().el);
    },
});

var app = new AppRouter();
Backbone.history.start();