window.PricingModel = Backbone.Model.extend();

window.PricingModels = Backbone.Collection.extend({
	model: PricingModel,
    url: urls.pricingModels
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
	initialize: function() {
		$(this.el).addClass("table table-bordered table-condensed");
	},
	getPricingModels: function(callback) {
		var table = this;
		
		window.pricingModelsCollection = new PricingModels();
		console.log("Fetching pricing models collection");
		window.pricingModelsCollection.fetch({
			success: function() {
				table.drawPricingModelsTable(table);
			}
		});
	},
	render: function(eventName) {
		console.log("Rendering pricing models table view");
		$(this.el).append(_.template($('#tpl-pricing-models-table-head').html()));
		
		this.getPricingModels();
		return this;
	},
	drawPricingModelsTable: function(table) {
		this.pricingModelsTableBody = new PricingModelsTableBodyView({model:window.pricingModelsCollection});
		$(table.el).append(table.pricingModelsTableBody.render().el);
		
		$(table.el).dataTable({
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