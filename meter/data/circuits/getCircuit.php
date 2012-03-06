<?php
	$dataRequest = json_decode(file_get_contents("php://input"), true);
	$rootCircuit = json_decode(file_get_contents("circuitsTree.json"), true);
	
	$circuit = findCircuit($rootCircuit, $dataRequest["id"], array());
	echo(json_encode($circuit));
	
	function findCircuit($circuit, $id, $ancestors)
	{
		if ($circuit["id"] == $id)
		{
			$circuit["ancestors"] = $ancestors;
			return $circuit;
		}
		foreach ($circuit["children"] as $child)
		{
			$childAncestors = $ancestors;
			$childAncestors[] = array("id" => $circuit["id"], "name" => $circuit["name"]);
			
			$circuitFound = findCircuit($child, $id, $childAncestors);
			if ($circuitFound != null)
				return $circuitFound;
		}
		
		return null;
	}
?>