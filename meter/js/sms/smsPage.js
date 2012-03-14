window.SMSPageView = Backbone.View.extend({
	template: _.template($("#tpl-sms-page").html()),
	render: function() {
		$(this.el).append(this.template());
		return this;
	}
});