window.CircuitsTree = Backbone.Model.extend({
    url: "data/circuits/circuitsTree.json"
});

window.CircuitsTableBodyRowView = Backbone.View.extend({
	tagName: "tr",
	template: _.template($("#tpl-circuits-table-body-row").html()),
	render: function() {
		$(this.el).append(this.template(this.model));
		return this;
	}
});

window.CircuitsTableBodyView = Backbone.View.extend({
	tagName: "tbody",
	_render: function(circuit, depth, ancestors) {
		circuit.cursor = circuit.type == "terminal" ? "arrow" : "pointer";
		circuit.toggle = circuit.type == "root" ? "minus" : circuit.type == "terminal" ? "empty" : "plus";
		var row = new CircuitsTableBodyRowView({model:circuit}).render().el;
		$(row).attr("circuitId", circuit.id);
		$(row).attr("ancestors", ancestors);
		$(row).attr("type", circuit.type);
		$(row).attr("open", circuit.type == "root");
		$(row).attr("depth", depth);
		$(this.el).append(row);
		for (var i = 0; i < circuit.children.length; i++)
		{
			circuit.children[i].lines = circuit.lines.slice(0);
			circuit.children[i].lines.push(i == circuit.children.length-1 ? 0 : 1);
			
			this._render(circuit.children[i], depth+1, ancestors + " " + circuit.id);
		}
	},
	render: function() {
		var depth = -1;
		var rootCircuit = this.model;
		rootCircuit = rootCircuit.toJSON();
		rootCircuit.lines = [];
		this._render(rootCircuit, depth+1, "");
		
		var tbody = this.el;
		// make toggle buttons
		$("tr", tbody).each(function() {
			if ($(this).attr("type") == "terminal")
				return;
			var circuitId = $(this).attr("circuitId");
			var ancestors = $(this).attr("ancestors");
			var row = $(this);
			
			$("img[name='toggle']", this).click(function() {
				row.attr("open", !row.attr("open"));
				// change image
				$(this).attr("src", "img/treeTable/" + (row.attr("open") ? "minus.png" : "plus.png"));
				// toggle decendants
				if (row.attr("open"))
					// show only direct decendants
					$("tr[ancestors='" + ancestors + " " + circuitId + "']", tbody).show(300);
				else
				{
					// hide all decendants and switch image to closed
					$("tr[ancestors^='" + ancestors + " " + circuitId + "']", tbody).hide(300).each(function() {
						$(this).attr("open", false);
						$("img[name='toggle']", this).attr("src", $(this).attr("type") == "terminal" ? "img/treeTable/empty.png" : "img/treeTable/plus.png");
					});
				}
			});
		});
		// hide rows of depth > 1
		$("tr", tbody).each(function() {
			if ($(this).attr("depth") > 1)
				$(this).hide();
		});
		
		return this;
	}
});

window.CircuitsTableView = Backbone.View.extend({
	tagName: "table",
	initialize: function() {
		$(this.el).addClass("table table-bordered table-condensed dataTable").attr("id", "circuits-tree-table");
	},
	render: function() {
		console.log("Rendering circuits table view");
		$(this.el).append(_.template($("#tpl-circuits-table-head").html()));
		window.circuitsTree = new CircuitsTree();
		// the tree version of the table
		var circuitsTreeTable = $(this.el);
		console.log("Fetching circuits tree");
		circuitsTree.fetch({
			success: function() {
				var circuitsTableBody = new CircuitsTableBodyView({model:circuitsTree});
				circuitsTreeTable.append(circuitsTableBody.render().el);
				
				// create data table
				// the data table of the table
				var circuitsDataTableDiv =  $("<div/>").hide();
				var circuitsDataTable = $("<table id='circuits-datatable'/>").append(circuitsTreeTable.html()).addClass("table table-bordered table-condensed");
				circuitsDataTableDiv.append(circuitsDataTable);
				circuitsTreeTable.after(circuitsDataTableDiv);

				// show all datatable rows
				$("tr", circuitsDataTable).show();
				
				// hide toggle buttons in datatable
				$("tr td img", circuitsDataTable).hide();
				
				circuitsDataTable.dataTable({
		        	"iDisplayLength": 10,		// begin with a table of up to 10 rows
		            "bDeferRender": true,		// save time when drawing table
		            "oLanguage": {
		            	"sInfo": "Showing _START_ to _END_ of _TOTAL_"
		            }
		    	});
				
				// show datatable when searching, and hide tree table
				$("#circuits-table-search input").keydown(function(e){
					// ignore delete button
					if (e.which == 8)
						return;
					// using timeout so that the text is present after the event
					// show circuits data table and hide circuits tree table
					circuitsDataTableDiv.show();
					circuitsTreeTable.hide();
					
					// put text in datatable's search box and make focus
					$("#circuits-datatable_filter input").val($("#circuits-table-search input").val()).focus();
					// hide search box and clear text
					$("#circuits-table-search").hide().val("");
				});
				
				// when datatable's search is empty, show tree table and hide datatable
				$("#circuits-datatable_filter input").keydown(function(){
					// using timeout so that the text is present after the event
					setTimeout(function(){
						if ($("#circuits-datatable_filter input").val() == "")
						{
							$("#circuits-table-search").show();
							$("#circuits-table-search input").focus();
							circuitsDataTableDiv.hide();
							circuitsTreeTable.show();
						}
					}, 0);
				});
			}
		});
		return this;
	}
});