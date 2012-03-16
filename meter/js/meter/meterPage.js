window.Meter = Backbone.Model.extend({
	url: urls.meter
});

window.MeterPageView = Backbone.View.extend({
	template: _.template($("#tpl-meter-page").html()),
    render: function() {
    	var meter = new Meter();
    	var self = this;
    	console.log("Fetching meter object");
    	meter.fetch({success: function() {
    		$(self.el).html(self.template(meter.toJSON()));
    	}});
    	return this;
    }
});