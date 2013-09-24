$(document).ready(function() {
  $(".country").draggable({ 
					cursor: "move",
					revert: "invalid" });
					
  $(".div-drop-zone").droppable({ 
				accept: ".country",
				tolerance: "intersect",
				drop: function(event, ui){
					console.log("dropped");
					$(this).removeClass("over");
					var dropped = ui.draggable;
					var droppedOn = $(this);
					$(dropped).detach().css({top: 0, left: 0}).appendTo(droppedOn);
				},
				over: function(event, elem) {
						$(this).addClass("over");
				},
				out: function(event, elem) {
						$(this).removeClass("over");
                }
			});
			
  $(".div-drop-zone").sortable();
  
  $("#origin").droppable({
					accept: ".country",
					drop: function(event, ui){
						$(this).removeClass("over");
						var dropped = ui.draggable;
						var droppedOn = $(this);
						$(dropped).detach().css({top: 0, left:  0}).appendTo(droppedOn);
					}
				});
});