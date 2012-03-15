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
		window.smsCollection = new SMSModels();
		self = this;
		this.model = window.smsCollection;
		window.smsCollection.fetch({
			success: function() {
				var date = null;
				var messageGroups = [];
				var messageGroup = null;
				_.each(self.model.models, function (smsMessage) {
					smsMessage = smsMessage.toJSON();
					if (smsMessage.date != date)
					{
						date = smsMessage.date;
						var newDate = new Date(date);
						var newDateStr = MONTHS[newDate.getMonth()] + " " + (newDate.getDate() + 1) + ", " + newDate.getFullYear();
						messageGroup = {};
						messageGroup.id = date;
						messageGroup.date = newDateStr;
						messageGroup.messages = [];
						messageGroups.push(messageGroup);
						//$(self.el).append($("<div/>").addClass("date").html(newDateStr));
					}
						
					messageGroup.messages.push(smsMessage);
		            //$(self.el).append(new SMSMessageView({model:smsMessage}).render().el);
		        }, self);
				$(self.el).append(self.template({messageGroups: messageGroups}));
				// show last date group
				$("[class='date']", self.el).last().click();
			}
		});
        return this;
    }
});

function filterMessages()
{
	var sent = $("#filters input[name='sent']").is(":checked");
	var received = $("#filters input[name='received']").is(":checked");
	var meter = $("#filters input[name='meter']").is(":checked");
	var user = $("#filters input[name='user']").is(":checked");
	
	// show all messages
	$("#messages .message").show().attr("filtered", false);
			
	// hide messages according to filters
	$("#messages .message").each(function() {
		var message = $(this);
		var sender = message.attr("sender");
		var recipiant = message.attr("recipiant");
		if (!sent && sender == "Self")
			message.hide().attr("filtered", true);
		if (!received && sender != "Self")
			message.hide().attr("filtered", true);
		if (!meter && (sender == "Meter" || recipiant == "Meter"))
			message.hide().attr("filtered", true);
		if (!user && (sender == "Self" && recipiant != "Meter" || sender != "Meter" && recipiant == "Self"))
			message.hide().attr("filtered", true);
	});
	
	// hide date group if no messages for that date
	$("#messages .date").each(function() {
		// hide if all children are filtered out
		if ($(this).next().children("[class='message'][filtered=false]").length == 0)
			$(this).hide();
		else
			$(this).show();
	});
}
