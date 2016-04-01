(function($) {
	var $window = $(window);
    var $html = $('html');

    $window.resize(function resize(){
        if ($window.width() < 768) {
            $html.removeClass('no-mobile');
            return $html.addClass('mobile');
        }else {
        	$html.removeClass('mobile');
        	return $html.addClass('no-mobile');
        }
        $html.removeClass('mobile');
    }).trigger('resize');


    if($('html').hasClass('mobile')) {
    	$('.zoom-container, .zoom-caption').removeClass('has-hover');
    	var $yo = $('.zoom-container').find('a');
    	$('.zoom-container a').on('click',function(e) {
    		e.preventDefault();
	        $(this).find('.zoom-caption').addClass('inactive');
	        $(this).find('.reaction').addClass('active');
	        $(this).find('audio')[0].play();
	    });
	    $("a[href]").click(function() {
		    var url = this.href;
		    setTimeout(function () {
		        location.href = url;
		    }, 2000);
		    
		});
    }

    if($('html').hasClass('no-mobile')) {
		$('.zoom-container a').mouseenter(function() {
	        $(this).find('audio').removeClass('inactive');
	        $(this).find('audio').addClass('active');
	        $(this).find('audio')[0].play();
	    });
	    $('.zoom-container a').mouseout(function () {
	        $(this).find('audio').removeClass('active');
	        $(this).find('audio').addClass('inactive');
	    });
	}
})(jQuery); 