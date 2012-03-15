<?php
	$dataRequest = json_decode(file_get_contents("php://input"), true);
	$pricingModels = json_decode(file_get_contents("pricingModels.json"), true);
	
	foreach ($pricingModels as $pricingModel)
	{
		if ($pricingModel["id"] == $dataRequest["id"])
		{
			echo(json_encode($circuit));
			return;
		}
	}
	echo(null);
?>