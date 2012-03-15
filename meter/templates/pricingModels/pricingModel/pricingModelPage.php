<script type="text/template" id="tpl-pricing-model-page">

<!-- Navigation Breadcrumb -->
<ul class="breadcrumb" style="padding:0px;background-image: none; background-color: white; border: none; padding-left:0px">
	<li>
		<a href="#pricingModels">Pricing Models</a><span class="divider">»</span>
	</li>
	<li>
		<span><%= name %></span>
	</li>
</ul>
<h2><%= name %></h2>

<!-- Pricing Model Settings -->
<fieldset>
    <legend>Pricing Model Settings</legend>
	<form id="pricing-model-settings-form">
		<?php include("templates/pricingModels/pricingModel/pricingModelSettings.php")?>
		<button class="btn pull-right" style="margin-top:10px" onclick="editPricingModel('<%= id %>');return false">Edit Pricing Model</button>
	</form>
</fieldset>
<p>
<div class="form-actions">
	<h4 class="">Caution</h4>
	<button class="btn btn-danger pull-right" onclick="removePricingModel('<%= id %>')">Remove Pricing Model</button>
	<div class="clearfix"></div>
</div>
</script>

<!-- Templates -->

<!-- JavaScript -->
<script type="text/javascript" src="js/pricingModels/pricingModel/pricingModel.js"></script>
<script type="text/javascript" src="js/pricingModels/pricingModel/pricingModelPage.js"></script>