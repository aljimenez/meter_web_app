window.PricingModelPageView = Backbone.View.extend({
	template: _.template($("#tpl-pricing-model-page").html()),
	drawPricingModel: function(id) {
		var pricingModel = window.pricingModelsCollection.get(id);	
		$(this.el).html(this.template(pricingModel.toJSON()));
	},
	render: function(id) {
		// get pricing models if they havent been already retrieved
		if (!window.pricingModelsCollection)
		{
			var self = this;
			
			window.pricingModelsCollection = new PricingModels();
			window.pricingModelsCollection.fetch({
				success: function() {
					self.drawPricingModel(id);
				}
			});
		}
		else
			this.drawPricingModel(id);
		
		return this;
	}
});