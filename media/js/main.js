(function($) {
	$('.zoom-container').mouseenter(function() {
        $(this).find('audio').removeClass('inactive');
        $(this).find('audio').addClass('active');
        $(this).find('audio')[0].play();
    });
    $('.zoom-container').mouseout(function () {
        $(this).find('audio').removeClass('active');
        $(this).find('audio').addClass('inactive');
    });



	// function handler(ev) {
	// 	var target = $(ev.target);
	// 	var elId = target.attr('id');
	// 	// var sound = $(".sound")[0];
	// 	if( target.is(".zoom-caption") ) {
	// 		console.log('The mouse was over '+ elId );

			
	// 		// $(elId).mouseenter(function() {
	// 		// 	sound.pause();
	// 		// 	sound.play();
	// 		// });


	// 	  // $(elId)[0].play();
	// 	  // $("#sound-" + Math.ceil(Math.random() * 3))[0].play();
	// 	   // elId.mouseenter(function(ev) {
	// 	   //   $("#sound-" + Math.ceil(Math.random() * 3))[0].play();
	// 	   // });  
	// 	}
	// }
	// $(".zoom-caption").mouseenter(handler);  
 	
})(jQuery);


