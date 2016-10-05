jQuery(document).ready(function ($) {

	jQuery(window).scroll(function(e) {
    e.preventDefault();
	
    //initialise Stellar.js
    jQuery(window).stellar();
	

    //Cache some variables
    var links = jQuery('.navigation').find('li');
    slide = jQuery('.slide');
    button = jQuery('.button');
    mywindow = jQuery(window);
    htmlbody = jQuery('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = jQuery(this).attr('data-slide');

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            jQuery('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            jQuery('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
	

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            jQuery('.navigation li[data-slide="1"]').addClass('active');
            jQuery('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: jQuery('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }


	
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    //links.click(function (e) {
        //e.preventDefault();
        //dataslide = jQuery(this).attr('data-slide');
        //goToByScroll(dataslide);
    //});

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    //button.click(function (e) {
        //e.preventDefault();
        //dataslide = jQuery(this).attr('data-slide');
        //goToByScroll(dataslide);

    //});
	});

});