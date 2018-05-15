$(function() {
	"use strict";
	
	$('.bttn').click(function() {
		$( ".bttn" ).removeClass( 'active');
		$( this ).addClass( 'active');

		if ($(this).attr('id') == "rect0") {
			
		}else if($(this).attr('id') == "rect1"){
			
		}else if($(this).attr('id') == "rect2"){
			
		}
	});

	$('#rect0').trigger("click");
});


