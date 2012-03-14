<h2>Meter <script type="text/javascript">document.write($("#meter_link").attr("name"));</script></h2>

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
				<td>Name: </td><td><input name="name" type="text"/></td><td width="15px"></td>
				<td>Mode: </td><td><input name="mode" type="text"/></td>
			</tr>
			<tr>
				<td>IP Address: </td><td><input name="address" type="text" placeholder="(e.g. 192.168.1.1)"/></td><td width="15px"></td>
				<td>Latitude: </td><td><input name="latitude" type="text"/></td>
			</tr>
			<tr>
				<td>PPPD Peer: </td><td><input name="pppdPeer" type="text"/></td><td width="15px"></td>
				<td>Longitude: </td><td><input name="longitude" type="text"/></td>
			</tr>
			<tr>
				<td>Credit Threshold: </td>
				<td>
					<div class="input-prepend">
						<span class="add-on">$</span>
						<input name="creditThreshold" type="text" style="width:123px"/>
					</div>
				</td>
				<td width="15px"></td>
				<td>Gateway: </td><td><input name="gateway" type="text"/></td>
			</tr>
			<tr>
				<td>Logs Home: </td><td><input name="logsHome" type="text"/></td><td width="15px"></td>
				<td>Gateway Job Request Freq: </td><td><input name="gatewayJobRequestFreq" type="text"/></td>
			</tr>
			<tr>
				<td>Persist Update Time: </td><td><input name="persistUpdateTime" type="text"/></td><td width="15px"></td>
				<td>Component Failure Check Freq: </td><td><input name="componentFailureCheckFreq" type="text"/></td>
			</tr>
			<tr>
				<td>Cache Time: </td><td><input name="cacheTime" type="text"/></td><td width="15px"></td>
				<td>Primary Parameter Trans Freq: </td><td><input name="primaryParamTransFreq" type="text"/></td>
			</tr>
		</table>
		<button class="btn pull-right" style="margin-top:10px">Update Meter</button>
	</form>
</fieldset>
<br>