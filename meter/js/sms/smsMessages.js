window.SMSModel = Backbone.Model.extend();

window.SMSModels = Backbone.Collection.extend({
	model: SMSModel,
    url: "data/sms/smsMessages.json"
});

var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
window.SMSMessagesView = Backbone.View.extend({
	tagName: "div",
	template:_.template($('#tpl-sms-messages').html()),
	initialize: function() {
		$(this.el).attr("id", "messages");
	},
	render: function (eventName) {
		console.log("Rendering sms messages view");
		window.smsCollection = new SMSModels();
		self = this;
		this.model = window.smsCollection;
		console.log("Fetching sms messages collection");
		window.smsCollection.fetch({
			success: function() {
				var date = null;
				// contains an array of message group objects (a group of messages with same date)
				var messageGroups = [];
				var messageGroup = null;
				// iterate through each message
				_.each(self.model.models, function (smsMessage) {
					smsMessage = smsMessage.toJSON();
					if (smsMessage.date != date)
					{
						date = smsMessage.date;
						var newDate = new Date(date);
						var newDateStr = MONTHS[newDate.getMonth()] + " " + (newDate.getDate() + 1) + ", " + newDate.getFullYear();
						// a group of messages with the same date
						messageGroup = {};
						messageGroup.id = date;
						messageGroup.date = newDateStr;
						messageGroup.messages = [];
						messageGroups.push(messageGroup);
					}
					messageGroup.messages.push(smsMessage);
		        }, self);
				$(self.el).append(self.template({messageGroups: messageGroups}));
				// show last date group
				$("[class='date']", self.el).last().click();
			}
		});
        return this;
    }
});
