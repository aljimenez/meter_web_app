<!DOCTYPE html>
<html style="background: white">
<head>
    <title>Meter Administration</title>

    <style type="text/css">
    #spec_link {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 22px;
        color: #333;
        text-decoration: none;
    }
    
    #spec_link:hover {
        color: #666;
        text-decoration: underline;
    }
    </style>

	
    <link rel="stylesheet/less" type="text/css" href="css/styles.less" />
    <script type="text/javascript" src="js/lib/less.js"></script>
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="css/jquery.dataTables.css" type="text/css" /> 
    
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
						<tbody>
							<tr>
								<td>
									<h4>&nbsp;<small>Meter Id: 123</small></h4>
								</td>
							</tr>
						</tbody>
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
	<?php include("templates/pricingModels.html")?>
	<?php include("templates/circuits.html")?>
	
	<!-- JavaScript -->
	<script type="text/javascript" src="js/lib/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="js/lib/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="js/lib/underscore-min.js"></script>
    <script type="text/javascript" src="js/lib/backbone-min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/pricingModels/pricingModels.js"></script>
	<script type="text/javascript" src="js/circuits/circuits.js"></script>
</body>
</html>