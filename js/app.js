$(function() {
	"use strict";
	
	var pymChild = new pym.Child();
	
	$('.item').hide();
	$('#clicksBtnItem').show();
	
	$('.next').click(function(){
		var thisId = $(this).attr('id');
		$('.next').addClass('inactiveBtn');
		$(this).removeClass('inactiveBtn');		
		$('.item').hide();
		$('#'+thisId+'Item').show();
	});
	
	
	$('.itemHead').click(function(){
		$(this).next('.itemDetails').slideToggle(function() {
			pymChild.sendHeight();
		});	
		
		
		if (! $(this).find('.arrowPng').hasClass('play')) {
        	 $(this).find('.arrowPng').attr('src', 'img/arrow2.png');
        	 $(this).find('.arrowPng').addClass('play');  
    	} else  {
        	 $(this).find('.arrowPng').attr('src', 'img/arrow.png');
        	 $(this).find('.arrowPng').removeClass('play');
    	}
		//$('.arrowPng').attr('src','img/arrow2.png');
	});
	
	pymChild.sendHeight();

$(window).resize(function(){ pymChild.sendHeight(); });
	
});


