window.PricingModelPageView = Backbone.View.extend({
	
	template: _.template($("#tpl-pricing-model-page").html()),
	drawPricingModel: function(id) {
		var pricingModel = window.pricingModelsCollection.get(id).toJSON();
		$(this.el).html(this.template(pricingModel));
		// fill pricing model values
		for (var field in pricingModel)
		{
			var setting = $("#pricing-model-settings-form [name='" + field + "']", this.el);
			if (!setting.get(0))
				continue;
			setting.val(pricingModel[field]);		
		}
	},
	render: function(id) {
		console.log("Rendering pricing model page view");
		// get pricing models if they havent been already retrieved
		if (!window.pricingModelsCollection)
		{
			var self = this;		
			window.pricingModelsCollection = new PricingModels();
			console.log("Fetching pricing models collection");
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