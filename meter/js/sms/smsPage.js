window.SMSPageView = Backbone.View.extend({
	template: _.template($("#tpl-sms-page").html()),
	render: function() {
		$(this.el).append(this.template());
		// append messages
		$(this.el).append(new SMSMessagesView().render().el);
		return this;
	}
});