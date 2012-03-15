<script type="text/template" id="tpl-sms-page">
<style>
	#filters {
		margin-left: 0;
	}
	
	#filters li {
		line-height: 18px;
	    margin-right: 10px;
	    display: inline;
	}

	#filters li input {
		margin-top: 0px;
		margin-bottom: 2px;
	}
	
	#messages {
		border: 1px solid darkgrey;
		border-radius: 5px;
		padding: 3px 0 3px 0;
		max-height: 375px;
	    min-height: 200px;
	    overflow-y: auto;
	}
	
	#earlier-messages {
		color: #0088CC;
		cursor: pointer;
		padding-left: 5px;
		padding-top: 3px;
	}
	
	#earlier-messages:hover {
		color: #005580;
		text-decoration: underline;
		
	}
	
	#messages .date {
		background: #f3f3f3;
		border-bottom: 1px solid #DDDDDD;
	    border-top: 1px solid #DDDDDD;
	    padding-left: 5px;
	    margin-top: 5px;
	    line-height: 22px;
	    font-size: 14px;
	    color: #222;
		cursor: pointer;
	}

	#messages .date:hover {
		color: #224488;
	}
	
	.message {
		padding-left: 5px;
		margin-top: 3px;
	}
	
	.message .time {
		color: darkgrey;
		font-size: 12px;
	}
	
	.message .sender {
		color: #224488;
	}
	
	.message .recipiant {
		color: darkgreen;
	}
	
	.message .text {
		color: black;
	}
	
</style>
<ul id="filters">
	<li>Display:</li>
	<li><input type="checkbox" checked name="sent" onchange="filterMessages()"/> Sent Messages</li>
	<li><input type="checkbox" checked name="received" onchange="filterMessages()"/> Messages Received</li>
	<li><input type="checkbox" checked name="meter" onchange="filterMessages()"/> Meter Messages</li>
	<li><input type="checkbox" checked name="user" onchange="filterMessages()"/> User Messages</li>
</ul>
<p>


</script>

<!-- Templates -->
<script type="text/template" id="tpl-sms-message">
	<span class="time"><%= time %></span>
	<span class="<%= (recipiant == 'Self' ? 'sender' : 'recipiant') %>"><%= (recipiant == 'Self' ? sender : "To " + recipiant) %>:</span>
	</span class="text"><%= message %></span>
</script>


<script type="text/template" id="tpl-sms-messages">
	<span id="earlier-messages">&laquo; Show Earlier Messages</span>
	<% _.each(messageGroups, function(messageGroup, i)
	{
	%>
		<div class="date" onclick="$('#<%= messageGroup.id %>-date-group').toggle();$('#<%= messageGroup.id %>-toggle i').toggle();">
			<span id='<%= messageGroup.id %>-toggle'>
				<i class="icon-chevron-down" style="display:none"></i>
				<i class="icon-chevron-right"></i>
			</span>
			<%= messageGroup.date %></div>
		<div id="<%= messageGroup.id %>-date-group" style="display:none">
	<%
		for (var i in messageGroup.messages)
		{
			var message = messageGroup.messages[i];
		%> 
			<div class='message' sender="<%= message.sender %>" recipiant="<%= message.recipiant %>" filtered='false'>
				<span class="time"><%= message.time %></span>
				<span class="<%= (message.recipiant == 'Self' ? 'sender' : 'recipiant') %>">
					<%= (message.recipiant == 'Self' ? message.sender : "To " + message.recipiant) %>:
				</span>
				</span class="text"><%= message.message %></span>
			</div>
	<%	} %>
		</div>
	<% }) %>
</script>

<script type="text/template" id="tpl-earlier-messages">
	<span id="earlier-messages" onclick="showEarlierMessages()">&laquo; Show Earlier Messages</span>
</script>



<!-- JavaScript -->
<script type="text/javascript" src="js/sms/sms.js"></script>
<script type="text/javascript" src="js/sms/smsPage.js"></script>
<script type="text/javascript" src="js/sms/smsMessages.js"></script>