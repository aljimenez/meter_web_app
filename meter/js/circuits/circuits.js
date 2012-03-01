window.Circuit = Backbone.Model.extend();

window.CircuitCollection = Backbone.Collection.extend({
	model: Circuit,
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
		circuit.shift = 14 * depth;
		circuit.cursor = circuit.type == "terminal" ? "arrow" : "pointer";
		circuit.image = circuit.type == "root" ? "tree_minus" : circuit.type == "terminal" ? "tree_disabled" : "tree_plus";
		var row = new CircuitsTableBodyRowView({model:circuit}).render().el;
		$(row).attr("name", circuit.name);
		$(row).attr("ancestors", ancestors);
		$(row).attr("type", circuit.type);
		$(row).attr("open", circuit.type == "root");
		$(row).attr("depth", depth);
		$(this.el).append(row);
		for (var i in circuit.children)
			this._render(circuit.children[i], depth+1, ancestors + " " + circuit.name);
	},
	render: function() {
		var depth = -1;
		_.each(this.model.models, function(circuit) {
			this._render(circuit.toJSON(), depth+1, "");
		}, this);
		// set toggle buttons
		var body = $(this.el);
		$("tr", this.el).each(function() {
			if ($(this).attr("type") == "terminal")
				return;
			var name = $(this).attr("name");
			var ancestors = $(this).attr("ancestors");
			var row = $(this);
			
			$("img", this).click(function() {
				row.attr("open", !row.attr("open"));
				// change image
				$(this).attr("src", "images/" + (row.attr("open") ? "tree_minus.gif" : "tree_plus.gif"));
				// toggle decendants
				if (row.attr("open"))
					// show only direct decendants
					$("tr[ancestors='" + ancestors + " " + name + "']", body).show();
				else
				{
					// hide all decendants and switch image to closed
					$("tr[ancestors^='" + ancestors + " " + name + "']", body).hide().each(function() {
						$(this).attr("open", false);
						$("img", this).attr("src", $(this).attr("type") == "terminal" ? "images/tree_disabled.gif" : "images/tree_plus.gif");
					});
				}
			});
		});
		// hide rows of depth > 1
		$("tr", body).each(function() {
			if ($(this).attr("depth") > 1)
				$(this).hide();
		});
		
		return this;
	}
});

window.CircuitsTableView = Backbone.View.extend({
	tagName: "table",
	render: function() {
		$(this.el).append(_.template($("#tpl-circuits-table-head").html()));
		var circuits = new CircuitCollection();
		var self = this;
		circuits.fetch({
			success: function() {
				var circuitsTableBody = new CircuitsTableBodyView({model:circuits});
				$(self.el).append(circuitsTableBody.render().el);
			}
		});
		return this;
	}
});