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
	
	#messages {
		border: 1px solid;
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
		border-bottom: 1px solid;
	    border-top: 1px solid;
	    padding-left: 5px;
	    margin-top: 5px;
	    line-height: 22px;
	    font-size: 14px;
	    color: #222;
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
	
	.message .receiver {
		color: darkgreen;
	}
	
	.message .text {
		color: black;
	}
	
</style>
<ul id="filters">
	<li>Display:</li>
	<li><input type="checkbox"/> Sent Messages</li>
	<li><input type="checkbox"/> Messages Received</li>
</ul>
<p>

<div id="messages">
	<span id="earlier-messages">&laquo; Show Earlier Messages</span>
</div>
</script>

<!-- Templates -->
<script type="text/template" id="tpl-message">
	<span class="time">{%= time}</span>
	<span class="{%= type}">{%= time}:</span>
	</span class="text">{%= message}</span>
</script>

<!-- JavaScript -->
<script type="text/javascript" src="js/sms/smsPage.js"></script>