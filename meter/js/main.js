var headLinks = {"dashboard": {"title": "Meter Dashboard", "linkName": "Dashboard", "url": ""},
				 "circuits": {"title": "Circuits", "linkName": "Circuits", "url": "circuits"},
				 "pricingModels": {"title": "Pricing Models", "linkName": "Pricing Models", "url": "pricing_models"}};

function changePage(page)
{
	$("#title").text(headLinks[page].title);
	$("#headlinks a").removeClass("btn-primary");
	$("#" + page + "_link").addClass("btn-primary");
}

window.HeadLinkItemView = Backbone.View.extend({
	tagName: "span",
	template:_.template($('#headlink').html()),
	render: function (eventName) {
		$(this.el).append(this.template(this.model));
        return this;
    }
});

window.HeadLinksView = Backbone.View.extend({
	
	render: function (eventName) {
		for (var section in headLinks)
			$(this.el).append(new HeadLinkItemView({model:headLinks[section]}).render().el);
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

    dashboard: function () {
    	changePage("dashboard");
    	this.headLinksView = new HeadLinksView();
    	$('#headlinks').html(this.headLinksView.render().el);
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