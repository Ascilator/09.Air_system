
jQuery(function () {
	
	$('._form').on('focus', function(){		
		if ($(this).val() == 'Имя'  || $(this).val() == 'Тел.') {
			$(this).val('');
		}
	});

	$('._form').on('blur', function(){
		if ($(this).val() == '') {
			if($(this).attr('val') == '1'){
				$(this).val('Имя');
			}
			if($(this).attr('val') == '2'){
				$(this).val('Тел.');
			}
			
		}
	});

	var slide;
	if($('body').width()<=900){
		slide = 1;
	} else {
		slide = 2;
	}
	var slider = $('.slider_body').bxSlider({
		slideMargin: 24,
		infiniteLoop: false,
		hideControlOnEnd: true,
		nextSelector: $('.next_control'),
		prevText: '',
		nextText: '',
		prevSelector: $('.prev_control'),
		controls: true,
		minSlides: slide,
		maxSlides: slide,
		slideWidth: 500,
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
	});
	
	$(window).resize(function(){
		sliderResize();
	});
	function sliderResize () {
		 if ($(window).width()<900) {
		    slider.reloadSlider({
		    	slideMargin: 24,
				infiniteLoop: false,
				hideControlOnEnd: true,
				nextSelector: $('.next_control'),
				prevText: '',
				nextText: '',
				prevSelector: $('.prev_control'),
				controls: true,
				slideWidth: 500,
				moveSlides: 1,
				swipeThreshold: 50,
				responsive: true,
		    	minSlides: 1,
		     	maxSlides: 1,
		    });
		 } else {
		 	 slider.reloadSlider({
		    	slideMargin: 24,
				infiniteLoop: false,
				hideControlOnEnd: true,
				nextSelector: $('.next_control'),
				prevText: '',
				nextText: '',
				prevSelector: $('.prev_control'),
				controls: true,
				slideWidth: 500,
				moveSlides: 1,
				swipeThreshold: 50,
				responsive: true,
		    	minSlides: 1,
		    	minSlides: 2,
		     	maxSlides: 2,
		    });
		 }
	}
	var slider_2 = $('.product_screen_slider_body').bxSlider({
		slideMargin: 24,
		infiniteLoop: true,
		nextSelector: $('.next_arrow'),
		prevText: '',
		nextText: '',
		prevSelector: $('.prev_arrow'),
		hideControlOnEnd: true,
		controls: true,
		minSlides: 1,
		maxSlides: 4,
		slideWidth: 363,
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
		shrinkItems: true,

	});


	var slider_3 = $('.logo_screen_slider_body').bxSlider({
		infiniteLoop: false,
		nextSelector: $('._next_arrow'),
		prevText: '',
		nextText: '',
		prevSelector: $('._prev_arrow'),
		hideControlOnEnd: true,
		controls: true,
		minSlides: 1,
		maxSlides: 6,
		slideWidth: 280,
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
		
	});




	function accordeon () {
		$('.question').click(function(){

			$(this).next('.answer').slideToggle(300);
			$(this).children('.decor').toggleClass('_active');
		});
	}
	accordeon ();


	if($('body').width()<=915) {
		$('.menu_list').append($('.adrees_block'));
		$('.adrees_block').children().addClass('menu_link');
	} 
	
	
	$('.burger_menu').on('click', function(){
		$('.burger_menu').toggleClass('_active_bu_menu');
		$('.burger').toggleClass('_active_bu');
		$('.burger_before').toggleClass('_active_bef_bu');
		$('.burger_after').toggleClass('_active_af_bu');
		$('.menu').toggleClass('responsive');
	});
	$(window).resize(function() {
		if($('body').width()<=915 && $('header').children('.adrees_block')) {
			$('.menu_list').append($('.adrees_block'));
			$('.adrees_block').children().addClass('menu_link');
			
		} else{
			$('.header').append($('.adrees_block'));
			$('.adrees_block').children().removeClass('menu_link');
			$('.header').append($('.burger_menu'));	
		}
	});
	

});