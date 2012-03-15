window.Dashboard = Backbone.Model.extend({
	urlRoot: "data/dashboard/dashboard.json"
});

window.DashboardPageView = Backbone.View.extend({
	template: _.template($("#tpl-dashboard-page").html()),
    render: function() {
    	console.log("Rendering dashboard page view");
    	var dashboard = new Dashboard();
    	var self = this;
    	console.log("Fetching dashboard object");
    	dashboard.fetch({success: function() {
    		$(self.el).html(self.template(dashboard.toJSON()));
    	}});
    	return this;
    }
});