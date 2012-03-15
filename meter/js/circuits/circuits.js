function addNewCircuit()
{
	console.log("Adding new circuit");
	cancelAddNewCircuit();
}

function cancelAddNewCircuit()
{
	console.log("Canceling add new circuit");
	$('#add-circuit-form').get(0).reset();$('#add-circuit').hide();$('#add-circuit-button').show();
}