function showEarlierMessages()
{
	console.log("Show earlier messages");
}

// filter messages based on filter checkboxes
function filterMessages()
{
	console.log("Filtering messages");
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