//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
	$(".navbar-fixed-top").addClass("navbar-small");
	$(".navbar-fixed-top").removeClass("navbar-big");
	$(".centered").addClass("navbar-footer-text");
	$(".navbar-brand-logo").addClass("scrolled");
	$(".right-side-bar").addClass("scrolled");
	$(".left-side-bar").addClass("scrolled");
	$(".home-section").addClass("scrolled");
	$(".navbar-footer").removeClass("collapse");
    } else {
	$(".navbar-fixed-top").addClass("navbar-big");
	$(".navbar-fixed-top").removeClass("navbar-small");
	$(".centered").removeClass("navbar-footer-text");
	$(".navbar-brand-logo").removeClass("scrolled");
	$(".right-side-bar").removeClass("scrolled");
	$(".left-side-bar").removeClass("scrolled");
	$(".home-section").removeClass("scrolled");
	$(".navbar-footer").addClass("collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/*
$( "#contact1" ).resize( function() {
    // Resize the contact panels to be equal size
    var $hContact1 = $( "#contact1" ).height();
    var $hContact2 = $( "#contact2" ).height();
    if ($hContact1 > $hContact2){
        $( "#contact2" ).height( $hContact1 );
    }
    else {
        $( "#contact1" ).height( $hContact2 );
    }
});

$( "#contact2" ).resize( function() {
    // Resize the contact panels to be equal size
    var $hContact1 = $( "#contact1" ).height();
    var $hContact2 = $( "#contact2" ).height();
    if ($hContact1 > $hContact2){
        $( "#contact2" ).height( $hContact1 );
    }
    else {
        $( "#contact1" ).height( $hContact2 );
    }
});
*/
$(function() {
    // Resize the contact panels to be equal size
    var $hContact1 = $( "#contact1" ).height();
    var $hContact2 = $( "#contact2" ).height();
    if ($hContact1 > $hContact2){
        $( "#contact2" ).height( $hContact1 );
    }
    else {
        $( "#contact1" ).height( $hContact2 );
    }
});

//jQuery to initialize the webpage
$(window).ready(function() {
    // Collapse the navbar-footer initially
    $(".navbar-footer").addClass("collapse");
/*
    // Resize the contact panels to be equal size
    var $hContact1 = $( "#contact1" ).height();
    var $hContact2 = $( "#contact2" ).height();
    if ($hContact1 > $hContact2){

        $( "#contact2" ).height( $hContact1 );
    }
    else {
        $( "#contact1" ).height( $hContact2 );
    }
*/
});
/*
//jQuery to execute when the window is resized
$(window).resize(function() {
    // Resize the contact panels to be equal size
    var $hContact1 = $( "#contact1" ).height();
    var $hContact2 = $( "#contact2" ).height();
    if ($hContact1 > $hContact2){
        $( "#contact2" ).height( $hContact1 );
    }
    else {
        $( "#contact1" ).height( $hContact2 );
    }
});
*/
