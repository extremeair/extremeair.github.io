(function($) {
    'use strict';

    /* Hide menu after click
    ----------------------------------------------*/
    $('.navbar-nav li a').click(function(event) {
        $('.in').collapse('hide');
    });
    /* Smooth scroll to section
    ----------------------------------------------*/
    $('a.scroll[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-70
                }, 500);
                return false;
            }
        }
    });
     $("#team-carousel").owlCarousel({
        autoplay:false, //Set AutoPlay to 5 seconds
        items : 3,
        lazyLoad : true
    });
 
    $('[data-toggle="tooltip"]').tooltip();
    $('.image-link').magnificPopup({
        type:'image'
    });

    /* Google map
    ----------------------------------------------*/

})(jQuery);
