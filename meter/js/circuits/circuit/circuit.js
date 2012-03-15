function saveSubCircuits()
{
	console.log("Saving sub-circuits");
	cancelEditSubCircuits();
}

function editSubCircuits()
{
	console.log("Editing sub-circuits");
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
	console.log("Cancel edit sub-circuits");
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

function editCircuit(id)
{
	console.log("Editing circuit");
}


function removeCircuit(id)
{
	console.log("Removing circuit");
	window.location = window.location.href.split('#')[0] + "#circuits";
}