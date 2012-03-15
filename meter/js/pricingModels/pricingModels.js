function addPricingModel()
{
	console.log("Adding pricing model");
	cancelAddPricingModel();
}

function cancelAddPricingModel()
{
	console.log("Canceling add pricing model");
	$('#add-pricing-model-form').get(0).reset();
	$('#add-pricing-model').hide();
	$('#add-pricing-model-button').show();
}