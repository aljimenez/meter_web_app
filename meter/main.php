<!DOCTYPE html>
<html style="background: white">
<head>
    <title>Meter Administration</title>

    <style type="text/css">
    body fieldset {
    	padding: 10px;
    	border: 2px solid #666;
    	display: inline;
    	border-radius: 5px;
    }
    
    body fieldset input, body fieldset select {
    	padding: 4px;
    	font-size: 13px;
    	margin-bottom: 4px;
    	
    }
    
    body fieldset table td div.input-append, body fieldset table td div.input-prepend{
    	margin: 0px;
    }
    
    body fieldset legend {
    	margin-bottom: 0px;
    	padding: 2px;
    	width: auto;
    	border: none;
    	font-size: 16px;
    }
    
    body .icon-info-sign {
    	cursor: help;
    }
    
    body input {
    	width: 150px;
    	height: 16px;
    }
    
    body select {
    	width: 160px;
    }
    
    body div.input-append span.add-on, body div.input-prepend span.add-on {
    	height: 16px;
    }
    </style>

	<script type="text/javascript" src="js/lib/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/lib/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="js/lib/jquery-ui-1.8.18.custom.min.js"></script>
    <script type="text/javascript" src="js/lib/underscore-min.js"></script>
    <script type="text/javascript" src="js/lib/backbone-min.js"></script>
    
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