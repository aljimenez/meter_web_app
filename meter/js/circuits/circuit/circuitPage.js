window.CircuitPageView = Backbone.View.extend({
	template: _.template($("#tpl-circuit-page").html()),
	drawCircuitPage: function(circuitRoot, id) {
		// find circuit and draw page
		var circuit = this.findCircuit(circuitRoot, id, []);
		
		$(this.el).html(this.template(circuit));
		
		// fill circuit values
		for (var field in circuit)
		{
			var setting = $("#circuit-settings-form [name='" + field + "']", this.el);
			if (!setting.get(0))
				continue;
			if (setting.get(0).nodeName == "SELECT")
				$("option[value='" + circuit.pricingModel + "']", setting).attr("selected", true);
			else
				setting.val(circuit[field]);		
		}
		// remove the option "varies" under status if the circuit's status is not varies
		if (circuit.status != "varies")
			$("#circuit-settings-form select[name='status'] option[value='varies']").remove();
		
		// disable editing sub-circuits for Root
		if (circuit.type == "root")
			$("#edit-available-circuits").hide();
		
		// populate sub-circuits
		var subCircuits = $("#sub-circuits", this.el);
		for (var i in circuit.children)
			subCircuits.append($("<li/>").addClass("ui-state-default")
									   .html("<a href='#circuits/" + circuit.children[i].id + "'>" + circuit.children[i].name + "</a>")
									   .attr("circuitId", circuit.children[i].id));

	},
	findCircuit: function(node, id, ancestors) {
		if (node.id == id)
		{
			node.ancestors = ancestors;
			return node;
		}
		
		for (var i in node.children)
		{
			var childAncestors = ancestors.slice(0);
			childAncestors.push({"id": node.id, "name": node.name});
			var foundNode = this.findCircuit(node.children[i], id, childAncestors);
			
			if (foundNode != null)
				return foundNode;
		}
		return null;
	},
	render: function(id) {
		console.log("Rendering circuit page view");
		var self = this;
		if (!window.circuitTree)
		{
			window.circuitsTree = new CircuitsTree();
			console.log("Fetching circuits tree");
			circuitsTree.fetch({
				success: function() {
					self.drawCircuitPage(circuitsTree.toJSON(), id);
				}
			});
		}
		else
			self.drawCircuitPage(circuitsTree.toJSON(), id);
		return this;
	}
});
