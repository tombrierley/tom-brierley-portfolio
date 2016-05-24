$(document).ready(function() {
  
	$(".tooltip").each(function() {
	  $(this).append("<span class='tooltip-box'>" + $(this).data("tooltip") + "</span>");
	});

});