window.Circuit = Backbone.Model.extend({
	urlRoot: "data/circuits/getCircuit.php"
});

window.CircuitPageView = Backbone.View.extend({
	template: _.template($("#tpl-circuit-page").html()),
	render: function(id) {
		
		// get circuit
		var circuit = new Circuit();
		var self = this;
		circuit.fetch({
			data: JSON.stringify({"id": id}),
			type: "POST",
			contentType: "application/json",
			success: function() {
				circuit = circuit.toJSON();
				$(self.el).html(self.template(circuit));
				
				// fill circuit values
				for (var field in circuit)
				{
					var setting = $("#circuit-settings-form [name='" + field + "']", self.el);
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
				var subCircuits = $("#sub-circuits", self.el);
				for (var i in circuit.children)
					subCircuits.append($("<li/>").addClass("ui-state-default")
											   .html("<a href='#circuits/" + circuit.children[i].id + "'>" + circuit.children[i].name + "</a>")
											   .attr("circuitId", circuit.children[i].id));
				
			}
		});
		
		// get available circuits
		/*
		
		$.ajax({
			url: "data/circuits/circuit/" + id,
			dataType: "json",
			success: function(circuit) {
				$(self.el).html(self.template(circuit));
				alert(circuit.toSource());
				// fill circuit setting values
				for (var field in circuit)
				{
					$("#circuit-settings-form [name='" + field + "']", self.el).val(circuit[field]);
				}
			},
			error: function(xhr, textStatus, errorThrown)
			{
				alert(xhr.toSource() + " " + textStatus + " " + errorThrown);
			}
			
		});*/
		
		
		return this;
	}
});


function editSubCircuits()
{
	$("#cancel-save-edit-sub-circuits").show();
	$("#move-icons").css({"visibility": "visible"});
	$("#edit-sub-circuits-button").hide();
	// make sub-circuits and available circuits sortable
	$("#sub-circuits, #available-circuits").sortable({
		connectWith: ".connectedSortable",
		disabled: false
	}).disableSelection();

	$("ul.connectedSortable li").css({"cursor": "move"});
	
	// change circuits to span (no link)
	$("ul.connectedSortable li a").each(function(){
		$(this).replaceWith($("<span/>").html($(this).html()).attr("href", $(this).attr("href")));
	});
}

function cancelEditSubCircuits()
{
	$("#cancel-save-edit-sub-circuits").hide();
	$("#move-icons").css({"visibility": "hidden"});
	$("#edit-sub-circuits-button").show();

	$("ul.connectedSortable li").css({"cursor": "auto"});
	$("#sub-circuits, #available-circuits").sortable({disabled: true});
	
	// move circuits back to their original lists
	$("#available-circuits").append($("li.ui-state-highlight"));
	$("#sub-circuits").append($("li.ui-state-default"));
	
	// change circuits to links
	$("ul.connectedSortable li span").each(function(){
		$(this).replaceWith($("<a/>").html($(this).html()).attr("href", $(this).attr("href")));
	});
}