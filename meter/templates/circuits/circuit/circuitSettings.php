<table>
	<tr>
		<td>Name: </td><td><input name="name" type="text"/></td><td width="15px"></td><td>Phone #: </td><td><input name="phone" type="text" placeholder="(e.g. 1-555-123-4567)"/></td>
	</tr>
	<tr>
		<td>IP Address: </td><td><input name="address" type="text" placeholder="(e.g. 192.168.1.1)"/></td><td width="15px"></td>
		<td>Max Energy <i class="icon-info-sign"></i>: </td>
		<td>
			<div class="input-append">
				<input name="maxEnergy" type="text" style="width:112px"/>
				<span class="add-on">kWh</span>
			</div>
		</td>
	</tr>
	<tr>
		<td>Status: </td><td><select name="status"><option value="varies">Varies</option><option value="on">On</option><option value="off">Off</option></select></td><td width="15px"></td>
		<td>Max Power <i class="icon-info-sign"></i>: </td>
		<td>
			<div class="input-append">
				<input name="maxPower" type="text" style="width:119px"/>
				<span class="add-on">kW</span>
			</div>
		</td>
	</tr>
	<tr>
		<td>Credit: </td>
		<td>
			<div class="input-prepend">
				<span class="add-on">$</span>
				<input name="credit" type="text" style="width:123px"/>
			</div>
		</td>
	<td width="15px"></td><td>Warning Signals <i class="icon-info-sign"></i>: </td><td><input name="warningSignals" type="text"/></td>
	</tr>
	<tr>
		<td>Pricing Model:</td>
		<td>
			<select name="pricingModel">
				<option value="varies">Varies</option>
				<?php
					$pricingModels = json_decode(file_get_contents("data/pricingModels.json"), true);
					foreach ($pricingModels as $pricingModel)
						echo("<option value='" . $pricingModel["id"] . "'>" . $pricingModel["name"] . "</option>");
				?>
			</select>
		</td>
		<td width="15px">
		</td>
		<td>Serial <i class="icon-info-sign"></i>: </td><td><input name="serial" type="text" placeholder="(e.g. 1424124-342)"/></td>
	</tr>
</table>