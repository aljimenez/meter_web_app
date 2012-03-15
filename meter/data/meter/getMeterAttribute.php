<?php

	function getMeterAttribute($attr)
	{
		$meterJson = json_decode(file_get_contents("data/meter/meter.json"), true);
		echo($meterJson[$attr]);
	}
?>