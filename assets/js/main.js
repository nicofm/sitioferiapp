$(document).ready(function() {

    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */

    $('input, textarea').placeholder();

	/* ======= Fixed Header animation ======= */

    $(window).on('scroll', function() {

         if ($(window).scrollTop() > 0 ) {
             $('#header').addClass('header-change');
         }
         else {
             $('#header').removeClass('header-change');
         }
    });

    /* ======= Toggle between Signup & Login Modals ======= */
    $('#signup-link').on('click', function(e) {
        $('#signup-modal').modal();
        $('#login-modal').modal('toggle');
        e.preventDefault();
    });



    $('#login-link').on('click', function(e) {
        $('#login-modal').modal();
        $('#signup-modal').modal('toggle');
        e.preventDefault();
    });


    $('#myNavmenu').offcanvas({toggle:false, canvas:"body", autohide: false});

    /* ======= jQuery FitVids - Responsive Video ======= */
    /* Ref: https://github.com/davatron5000/FitVids.js/blob/master/README.md */

    $(".video-container").fitVids();

    //jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}



});
