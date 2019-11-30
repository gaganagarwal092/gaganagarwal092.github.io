//$("#owl").owlCarousel({
//	//Basic Speeds
//	slideSpeed: 1000,
//	paginationSpeed: 1400,
//	//Autoplay
//	autoPlay: true,
//	goToFirst: true,
//	goToFirstSpeed: 1000,
//	// Navigation
//	navigation: false,
//	navigationText: [" ", " "],
//	pagination: true,
//	paginationNumbers: false,
//	// Responsive 
//	responsive: true,
//	items: 1,
//	itemsDesktop: [1199, 1],
//	itemsDesktopSmall: [980, 1],
//	itemsTablet: [768, 1],
//	itemsMobile: [479, 1]
//});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixed_header');
    }
    else {
        $('.header').removeClass('fixed_header');
    }
});

jQuery("#request").click(function (e) {
    if (jQuery("#formid").valid()) {
        $('.formmessge').slideDown();
        $('#formid').slideUp();
    }
    else {
        $('.formerror').slideDown();
    }
});
wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100,
            callback: function (box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        }
);
wow.init();