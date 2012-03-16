<script type="text/template" id="tpl-circuit-page">

<!-- Navigation Breadcrumb -->
<ul class="breadcrumb" style="padding:0px;background-image: none; background-color: white; border: none; padding-left:0px">
	<li>
		<a href="#circuits">Circuits</a><span class="divider">»</span>
	</li>
	<% _.each(ancestors , function(ancestor, i) {
		%>
			<li><a href="#circuits/<%= ancestor.id %>"><%= ancestor.name %></a><span class="divider">»</span>
		<%
	})%>
	<li>
		<span><%= name %></span>
	</li>
</ul>
<h2><%= name %> - <%= type.substring(0, 1).toUpperCase() + type.substring(1) %>  Circuit</h2>

<!-- Circuit Settings -->
<fieldset>
    <legend>Circuit Settings</legend>
	<form id="circuit-settings-form">
		<?php include("templates/circuits/circuit/circuitSettings.php")?>
		<button class="btn pull-right" style="margin-top:10px" onclick="editCircuit('<%= id %>');return false;">Edit Circuit</button>
	</form>
</fieldset>
<br>

<!--  Sub-circuit -->
<fieldset>
	<legend>Sub-circuits</legend>
	<div style="height:100px">
		<style>
			ul.connectedSortable {
				min-width: 120px;
				min-height: 90px;
				margin: 0 0 10px 0;
				list-style-type: none;
				float: left;
			}
			ul.connectedSortable li {
				padding: 2px;
				margin: 2px;
				font-weight: bold;
			}
			ul.connectedSortable li.ui-state-default a,
			ul.connectedSortable li.ui-state-highlight a {
				color: #0088CC
			}
			ul.connectedSortable li.ui-state-default a:hover,
			ul.connectedSortable li.ui-state-highlight a:hover {
				color: #005580;
			}
		</style>
		
		<div style="display:inline;float:left;">
			Sub-circuits:
			<br>
			<div style="border: 1px solid;padding:4px;border-radius:5px;height:100px;overflow-y:scroll;overflow-x:hidden">
				<ul id="sub-circuits" class="connectedSortable">
				</ul>
			</div>
		</div>
		<span id="edit-available-circuits">
		<div id="move-icons" style="margin-top:60px;margin-left:10px; margin-right:10px;visibility:hidden;float:left"><i class="icon-arrow-left"></i><i class="icon-arrow-right"></i></div>
		
		<div style="display:inline;float:left;">
			Available Circuits <i class="icon-info-sign"></i>: 
			<br>
			<div style="border: 1px solid;padding:4px;border-radius:5px;height:100px;overflow-y:scroll;overflow-x:hidden">
				<ul id="available-circuits" class="connectedSortable">
					<?php
						$rootCircuit = json_decode(file_get_contents("data/circuits/circuitsTree.json"), true);
						
						// return leaf circuits directly under root
						$availableCircuits = array();
						foreach ($rootCircuit["children"] as $availableCircuit)
						{
							if (count($availableCircuit["children"]) == 0)
								echo("<li class='ui-state-highlight' circuitId='" . $availableCircuit["id"] . "'><a href='#circuits/" . $availableCircuit["id"] . "'>" . $availableCircuit["name"] . "</a></li>");
						}
					?>
				</ul>
			</div>
		</div>
		<div style="margin-top:55px;margin-left:10px;float:left;display:inline">
			<span id="cancel-save-edit-sub-circuits" style="display:none">
				<button class="btn" id="cancel-edit-sub-circuits-button" onclick="cancelEditSubCircuits()">Cancel</button>
				<button class="btn" id="save-edit-sub-circuits-button" onclick="saveEditSubCircuits()">Save</button>
			</span>
			<button class="btn" id="edit-sub-circuits-button" onclick="editSubCircuits()">Edit Sub-circuits</button>
		</div>
		</span>
	</div>
	<div class="clearfix"></div>
</fieldset>
<br>

<!--  Add New Circuit -->
<?php include("templates/circuits/circuit/addNewCircuit.php")?>

<p>
<div class="form-actions">
	<h4 class="">Caution</h4>
	<button class="btn btn-danger pull-right" onclick="removeCircuit('<%= id %>')">Remove Circuit</button>
	<div class="clearfix"></div>
</div>
</script>

<!-- Templates -->

<!-- JavaScript -->
<script type="text/javascript" src="js/circuits/circuit/circuit.js"></script>
<script type="text/javascript" src="js/circuits/circuit/circuitPage.js"></script>