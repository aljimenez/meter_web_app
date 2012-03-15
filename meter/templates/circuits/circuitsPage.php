<script type="text/template" id="tpl-circuits-page">
	<div class="pull-right clearfix" id="circuits-table-search">
		<label class="pull-right" style="margin-bottom:0px">Search:</label>
		<div class="clearfix"></div>
		<input type="text" placeholder="Search for circuits"/>
	</div>
	<div id="circuits-table"></div>
	<div class="clearfix"></div>
	<?php include("templates/circuits/circuit/addNewCircuit.php")?>
	<p>
</script>

<!-- Templates -->
<?php include("templates/circuits/circuitsTable.html")?>
<?php include("templates/circuits/circuit/circuitPage.php")?>

<!-- JavaScript -->
<script type="text/javascript" src="js/circuits/circuits.js"></script>
<script type="text/javascript" src="js/circuits/circuitsPage.js"></script>
<script type="text/javascript" src="js/circuits/circuitsTable.js"></script>
