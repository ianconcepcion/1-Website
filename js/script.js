$(document).ready(function() {
	 // Window Resize
	$(window).resize(function(){
		var $winWidth = $(window).width();
		if($winWidth > 880){
			$('body').removeClass('nav-open');
		}
	});

    // Mobile Nav
    $('.hamburger').click(function(e) {
        e.preventDefault();
        toggleMenu();
    });
    
    function toggleMenu() {
        $('body').toggleClass('nav-open');
    }
    
    $('.site-cache').click(function(e){
      $('body').removeClass('nav-open');
    });

    $('#full-width-slider').royalSlider({
        arrowsNav: true,
        loop: false,
        keyboardNavEnabled: true,
        controlsInside: false,
        imageScaleMode: 'fill', // fill, fit, fit-if-smaller
        arrowsNavAutoHide: false,
        autoScaleSlider: true, 
        autoScaleSliderWidth: 960,     
        autoScaleSliderHeight: 350,
        controlNavigation: 'bullets', // bullets', 'thumbnails', 'tabs' or 'none'
        navigateByClick: false,
        transitionType:'move', // fade or move
        globalCaption: true,
        deeplinking: {
            enabled: true,
            change: false
        },
        autoScaleSlider: true,
        autoPlay: {
            // autoplay options go gere
            enabled: true,
            pauseOnHover: false,
            delay: 4000
        },

        /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
        imgWidth: 1288,
        imgHeight: 715
    });

    /* Scroll to Top button */
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? scrollButton.css({
            '-webkit-transform': 'translate3d(0, 0, 0)',
            '-moz-transform': 'translate3d(0, 0, 0)',
            '-o-transform': 'translate3d(0, 0, 0)',
            'transform': 'translate3d(0, 0, 0)'
        }) : scrollButton.css({
            '-webkit-transform': 'translate3d(0, 140%, 0)',
            '-moz-transform': 'translate3d(0, 140%, 0)',
            '-o-transform': 'translate3d(0, 140%, 0)',
            'transform': 'translate3d(0, 140%, 0)'
        });
    });
    
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
});
