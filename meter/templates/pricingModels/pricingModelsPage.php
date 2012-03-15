<script type="text/template" id="tpl-pricing-models-page">
	<div id="pricing-models-table" class="clearfix"></div>
	<div id="add-pricing-model-button">
		<br>
		<button class="btn" onclick="$('#add-pricing-model-button').hide();$('#add-pricing-model').show()">Add New Pricing Model</button>
	</div>
	<fieldset id="add-pricing-model" style="display:none">
	    <legend>Add New Pricing Model</legend>
	    <form id="add-pricing-model-form">
			<?php include("templates/pricingModels/pricingModel/pricingModelSettings.php")?>
			<div class="pull-right" style="margin-top:10px">
				<button class="btn" onclick="cancelAddPricingModel();return false;">Cancel</button>
				<button class="btn" onclick="addPricingModel();return false;">Add Pricing Model</button>
			</div>
		</form>
	</fieldset>
	<p>
</script>

<!-- Templates -->
<?php include("templates/pricingModels/pricingModelsTable.html")?>
<?php include("templates/pricingModels/pricingModel/pricingModelPage.php")?>

<!-- JavaScript -->
<script type="text/javascript" src="js/pricingModels/pricingModels.js"></script>
<script type="text/javascript" src="js/pricingModels/pricingModelsPage.js"></script>
<script type="text/javascript" src="js/pricingModels/pricingModelsTable.js"></script>