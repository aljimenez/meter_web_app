<!-- Align input field labels to the right -->
<style>
	#pricing-model-settings tr td:nth-child(1),
	#pricing-model-settings tr td:nth-child(4) {
		text-align: right;
		padding-right: 5px;
	}
</style>
<table id="pricing-model-settings">
	<tr>
		<td>Name: </td><td><input name="name" type="text"/></td><td width="15px"></td>
		<td>Base Line Rate: </td>
		<td>
			<div class="input-prepend">
				<span class="add-on">$</span>
				<input name="baseLineRate" type="text" style="width:123px"/>
			</div>
		</td>
	</tr>
	<tr>
		<td>Power Low: </td>
		<td>
			<div class="input-append">
				<input name="powerLow" type="text" style="width:112px"/>
				<span class="add-on">kWh</span>
			</div>
		</td>
		</td><td width="15px"></td>
		<td>Power Low Mult: </td><td><input name="powerLowMult" type="text"/></td>
	</tr>
	<tr>
		<td>Power High: </td>
		<td>
			<div class="input-append">
				<input name="powerhigh" type="text" style="width:112px"/>
				<span class="add-on">kWh</span>
			</div>
		</td>
		</td><td width="15px"></td>
		<td>Power High Mult: </td><td><input name="powerHighMult" type="text"/></td>
	</tr>
	<tr>
		<td>Power Mid: </td>
		<td>
			<div class="input-append">
				<input name="powerMid" type="text" style="width:112px"/>
				<span class="add-on">kWh</span>
			</div>
		</td>
		</td><td width="15px"></td>
		<td>Energy Low Mult: </td><td><input name="energyLowMult" type="text"/></td>
	</tr>
	<tr>
		<td>Energy Threshold: </td>
		<td>
			<div class="input-append">
				<input name="energyThreshold" type="text" style="width:119px"/>
				<span class="add-on">kW</span>
			</div>
		</td>
		</td><td width="15px"></td>
		<td>Energy High Mult: </td><td><input name="energyHighMult" type="text"/></td>
	</tr>
	<tr>
		<td>Time Day Start: </td><td><input name="timeDayStart" type="text"/></td><td width="15px"></td>
		<td>Day Mult: </td><td><input name="dayMult" type="text"/></td>
	</tr>
	<tr>
		<td>Time Night Start: </td><td><input name="timeNightStart" type="text"/></td><td width="15px"></td>
		<td>Night Mult: </td><td><input name="nightMult" type="text"/></td>
	</tr>
	</tr>
</table>