window.PricingModelsPageView = Backbone.View.extend({
	template: _.template($("#tpl-pricing-models-page").html()),
	render: function() {
		$(this.el).append(this.template());
		// append table
		$("#pricing-models-table", this.el).html(new PricingModelsTableView().render().el);
		return this;
	}
});