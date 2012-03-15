// the main navigation links
var headLinks = {"dashboard": {"title": "Meter Dashboard", "linkName": "Dashboard", "url": ""},
				 "circuits": {"title": "Circuits", "linkName": "Circuits", "url": "circuits"},
				 "pricingModels": {"title": "Pricing Models", "linkName": "Pricing Models", "url": "pricingModels"},
				 "sms": {"title": "SMS Messages", "linkName": "SMS", "url": "sms"}};

function changePage(page)
{
	$("#headlinks a").removeClass("btn-primary");
	$("#meter_link").css("background", "none");
	
	if (page == "Meter")
	{	
		$("#meter_link").css("background", "#f5f5f5");
		$("#meter_link > a").blur();
	}
	
	if (headLinks[page])
	{
		$("#title").text(headLinks[page].title);
		$("#headlinks a[name='" + headLinks[page].linkName + "']").addClass("btn-primary");		
	}
	else
		$("#title").text(page);	
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

    routes: {
        "": "dashboard",
        "circuits": "circuitsPage",
        "circuits/:id": "circuit",
        "pricingModels": "pricingModels",
        "pricingModels/:id": "pricingModel",
        "sms": "sms",
        "meter": "meter"
    },
    
    initialize: function() {
    	this.headLinksView = new HeadLinksView();
    	$('#headlinks').html(this.headLinksView.render().el);
    	console.log("Initializing headlinks");
    },
    
    dashboard: function () {
    	changePage("dashboard");
    	$('#content').html(new DashboardPageView().render().el);
    	console.log("Dashboard page");
    },
    
    circuitsPage: function() {
    	changePage("circuits");
    	$('#content').html(new CircuitsPageView().render().el);
    	console.log("Circuits page");
    },
    
    circuit: function(id) {
    	changePage("circuits");
    	$('#content').html(new CircuitPageView().render(id).el);
    	console.log("Circuit page");
    },
    
    pricingModels: function() {
    	changePage("pricingModels");
    	$('#content').html(new PricingModelsPageView().render().el);
    	console.log("Pricing Models page");
    },
    
    pricingModel: function(id) {
    	changePage("pricingModels");
    	$('#content').html(new PricingModelPageView().render(id).el);
    	console.log("Pricing Model page");
    },
    
    sms: function() {
    	changePage("sms");
    	$('#content').html(new SMSPageView().render().el);
    	console.log("SMS page");
    },
    
    meter: function() {
    	changePage("Meter");
    	$('#content').html(new MeterPageView().render().el);
    	console.log("Meter page");
    }
});

var app = new AppRouter();
Backbone.history.start();