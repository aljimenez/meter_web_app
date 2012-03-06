window.CircuitsPageView = Backbone.View.extend({
	template: _.template($("#tpl-circuits-page").html()),
	render: function() {
		$(this.el).append(this.template());
		// append table
		$("#circuits-table", this.el).append(new CircuitsTableView().render().el);
		return this;
	}
});