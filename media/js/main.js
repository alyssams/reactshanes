(function($) {
	var $window = $(window);
    var $html = $('html');
    var $tile = $('.zoom-container');
    var $yo = $tile.find('a');

    $window.resize(function resize(){
        if ($window.width() < 769) {
            $html.removeClass('no-mobile');
            return $html.addClass('mobile');
        }else {
        	$html.removeClass('mobile');
        	return $html.addClass('no-mobile');
        }
        $html.removeClass('mobile');
    }).trigger('resize');


    if($('html').hasClass('mobile')) {
    	$yo.removeAttr('href');
    	$yo.on('click',function(e) {
    		e.preventDefault();
	        $tile.find('audio')[0].play();
	        return false;
	    });
	    $('.image-zoom-container').find('a').addClass('active').removeClass('inactive');
    }

    if($('html').hasClass('no-mobile')) {
		$tile.mouseenter(function() {
	        $(this).find('audio').removeClass('inactive');
	        $(this).find('audio').addClass('active');
	        $(this).find('audio')[0].play();
	    });
	    $tile.mouseout(function () {
	        $(this).find('audio').removeClass('active');
	        $(this).find('audio').addClass('inactive');
	    });
	}
})(jQuery); 