window.MeterPageView = Backbone.View.extend({
	template: _.template($("#tpl-meter-page").html()),
	render: function() {
		$(this.el).append(this.template());
		return this;
	}
});