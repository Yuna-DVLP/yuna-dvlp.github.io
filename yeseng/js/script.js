$(document).ready(function(){
	
	// pop-up "Записаться на пробное занятие"

	$('.js-popup-btn').click(function() {
		$('.js-popup').removeClass("popup_close");
	});

	$('.js-popup-close').click(function() {
		$('.js-popup').addClass("popup_close");
	});

	$(document).mouseup(function(e) {
		var popup = $('.js-popup');
		if(e.target != popup && popup.has(e.target).length === 0){
			$('.js-popup').addClass("popup_close");
		}
	});

	// slider-dots "Отзывы"

	$('.feedback-items').slick({
		dots: true,
		arrows: false,
		infinite: true
	});

});

		


















