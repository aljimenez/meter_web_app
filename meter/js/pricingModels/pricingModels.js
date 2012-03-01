window.PricingModel = Backbone.Model.extend();

window.PricingModels = Backbone.Collection.extend({
	model: PricingModel,
    url: "data/pricingModels.json"
});

window.PricingModelsTableBodyRowView = Backbone.View.extend({
	tagName: "tr",
	template:_.template($('#tpl-pricing-models-table-body-row').html()),
	render: function (eventName) {
		$(this.el).append(this.template(this.model.toJSON()));
        return this;
    }
});

window.PricingModelsTableBodyView = Backbone.View.extend({
	tagName: "tbody",
	render:function (eventName) {
        _.each(this.model.models, function (pricingModel) {
            $(this.el).append(new PricingModelsTableBodyRowView({model:pricingModel}).render().el);
        }, this);
        return this;
    }
});

window.PricingModelsTableView = Backbone.View.extend({
	tagName: "table",
	render: function(eventName) {
		$(this.el).append(_.template($('#tpl-pricing-models-table-head').html()));
		var pricingModels = new PricingModels();
		this.pricingModelsTableBody = new PricingModelsTableBodyView({model:pricingModels});
		var self = this;
		pricingModels.fetch({
			success: function() {
				$(self.el).append(self.pricingModelsTableBody.render().el);

				$(self.el).dataTable({
		        	"iDisplayLength": 10,		// begin with a table of up to 10 rows
		            "bServerSide": false,		// use server side data
		            "bProcessing": false,		// show processing div when sending request to server
		            "bDeferRender": true,		// save time when drawing table
		    		"aoColumnDefs": [{"bSortable": true, "aTargets": [0]}],  // the following columns are sortable
		            "oLanguage": {
		            	"sInfoFiltered": "", // dont show how many sessions where filtered due to the limit
		            	"sInfo": "Showing _START_ to _END_ "
		            }
		    	});
			}
		});
		return this;
	}
});