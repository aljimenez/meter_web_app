<script type="text/template" id="tpl-meter-page">
<h2><%= name %></h2>

<!-- Align input field labels to the right -->
<style>
	#meter-settings tr td:nth-child(1),
	#meter-settings tr td:nth-child(4) {
		text-align: right;
		padding-right: 5px;
	}
</style>
<!-- Meter Settings -->
<fieldset>
    <legend>Meter Settings</legend>
	<form id="circuit-settings-form">
		<table id="meter-settings">
			<tr>
				<td>Name: </td><td><input name="name" type="text" value="<%= name %>"/></td><td width="15px"></td>
				<td>Mode: </td><td><input name="mode" type="text" value="<%= mode %>"/></td>
			</tr>
			<tr>
				<td>IP Address: </td><td><input name="address" type="text" value="<%= address %>" placeholder="(e.g. 192.168.1.1)"/></td><td width="15px"></td>
				<td>Latitude: </td><td><input name="latitude" type="text" value="<%= latitude %>"/></td>
			</tr>
			<tr>
				<td>PPPD Peer: </td><td><input name="pppdPeer" type="text" value="<%= pppdPeer %>"/></td><td width="15px"></td>
				<td>Longitude: </td><td><input name="longitude" type="text" value="<%= longitude %>"/></td>
			</tr>
			<tr>
				<td>Credit Threshold: </td>
				<td>
					<div class="input-prepend">
						<span class="add-on">$</span>
						<input name="creditThreshold" type="text" value="<%= creditThreshold %>" style="width:123px"/>
					</div>
				</td>
				<td width="15px"></td>
				<td>Gateway: </td><td><input name="gateway" type="text" value="<%= gateway %>"/></td>
			</tr>
			<tr>
				<td>Logs Home: </td><td><input name="logsHome" type="text" value="<%= logsHome %>"/></td><td width="15px"></td>
				<td>Gateway Job Request Freq: </td><td><input name="gatewayJobRequestFreq" type="text" value="<%= gatewayJobRequestFreq %>"/></td>
			</tr>
			<tr>
				<td>Persist Update Time: </td><td><input name="persistUpdateTime" type="text" value="<%= persistUpdateTime %>"/></td><td width="15px"></td>
				<td>Component Failure Check Freq: </td><td><input name="componentFailureCheckFreq" type="text" value="<%= componentFailureCheckFreq %>"/></td>
			</tr>
			<tr>
				<td>Cache Time: </td><td><input name="cacheTime" type="text" value="<%= cacheTime %>"/></td><td width="15px"></td>
				<td>Primary Parameter Trans Freq: </td><td><input name="primaryParamTransFreq" type="text" value="<%= primaryParamTransFreq %>"/></td>
			</tr>
		</table>
		<button class="btn pull-right" style="margin-top:10px" onclick="updateMeter();return false;">Update Meter</button>
	</form>
</fieldset>
<br>
</script>

<!-- Templates -->

<!-- JavaScript -->
<script type="text/javascript" src="js/meter/meter.js"></script>
<script type="text/javascript" src="js/meter/meterPage.js"></script>