window.Meter = Backbone.Model.extend({
	urlRoot: "data/meter/meter.json"
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