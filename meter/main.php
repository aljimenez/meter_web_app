<!DOCTYPE html>
<html style="background: white">
<head>
    <title>Meter Administration</title>

	<script type="text/javascript" src="js/lib/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/lib/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="js/lib/jquery-ui-1.8.18.custom.min.js"></script>
    <script type="text/javascript" src="js/lib/underscore-min.js"></script>
    <script type="text/javascript" src="js/lib/backbone-min.js"></script>
    <script type="text/javascript">
		var urls = {
			circuitsTree: "data/circuits/circuitsTree.json",
			pricingModels: "data/pricingModels/pricingModels.json",
			smsMessages: "data/sms/smsMessages.json",
			meter: "data/meter/meter.json",
			dashboard: "data/dashboard/dashboard.json"
		};
    </script>
    
    
    <link rel="stylesheet/less" type="text/css" href="css/styles.less" />
    <script type="text/javascript" src="js/lib/less.js"></script>
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="css/jquery.dataTables/jquery.dataTables.css" type="text/css" />
    <link rel="stylesheet" href="css/jquery.ui/jquery-ui-1.8.18.custom.css" type="text/css" /> 
    
</head>
<body>
	<div class="container">
		<div id="head-row" class="page-header">
			<h1 class="span8" style="margin:0px" id="title">Dashboard</h1>
			<p class="span3 pull-right">
			<div class="clearfix">&nbsp;</div>
        </div>
        <div>
        	<div class="row">
				<div id="headlinks"></div>
				<div class="span2 offset4">
					<table class="table table-bordered">
						<tr><td id="meter_link">
							<!-- Get the name of the meter -->
							<a  href="#meter">Meter <?php include("data/meter/getMeterAttribute.php"); echo(getMeterAttribute("name")); ?></a>
						</td></tr>
					</table>
				</div>
			</div>
		</div>
        <div id="inner-wrap">
        	<div id="content"></div>
		</div>
	</div>
	
	<!-- Templates -->
	<?php include("templates/main.html")?>
	<?php include("templates/circuits/circuitsPage.php")?>
	<?php include("templates/pricingModels/pricingModelsPage.php")?>
	<?php include("templates/sms/smsPage.php")?>
	<?php include("templates/meter/meterPage.php")?>
	<?php include("templates/dashboard/dashboardPage.php")?>
	
	<!-- JavaScript -->
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>