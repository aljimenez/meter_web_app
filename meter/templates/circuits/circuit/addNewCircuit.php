<div id="add-circuit-button">
	<br>
	<button class="btn" onclick="$('#add-circuit-button').hide();$('#add-circuit').show()">Add New Circuit</button>
</div>

<fieldset id="add-circuit" style="display:none">
    <legend>Add New Circuit</legend>
    <form id="add-circuit-form">
		<?php include("templates/circuits/circuit/circuitSettings.php")?>
		<div class="pull-right" style="margin-top:10px">
			<button class="btn" onclick="cancelAddNewCircuit();return false;">Cancel</button>
			<button class="btn" onclick="addNewCircuit();return false;">Add Circuit</button>
		</div>
	</form>
</fieldset>