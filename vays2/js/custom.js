$('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                    ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
// $('.sidenavlinkL').click(function () {
//     $('#mySidenav').removeClass('openside');
//     $('.hamburger').removeClass('is-active');
// });

//$(window).scroll(function () {
//    if ($(window).scrollTop() >= 45) {
//        $('.header').addClass('fixed_header');
//    }
//    else {
//        $('.header').removeClass('fixed_header');
//    }
//});
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

// var hamburgers = document.querySelectorAll(".hamburger");
// if (hamburgers.length > 0) {
//     forEach(hamburgers, function (hamburger) {
//         hamburger.addEventListener("click", function () {
//             this.classList.toggle("is-active");
//         }, false);
//     });
// }

// $('.hamburger').click(function () {

//     if ($(this).hasClass('is-active')) {

//         $('#mySidenav').addClass('openside');
//         $('.header').removeClass('fixed_header');
//     }
//     else {
//         $('#mySidenav').removeClass('openside');
//     }

// });

$('.tab').click(function () {
    if ($(this).hasClass('active')) {
        $('.tab').find('span').removeClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $('.tabs').slideUp();
    }
    else {
        var id = $(this).data('id');

        $('.tab').find('span').removeClass('color');
        $(this).find('span').addClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('.fa').addClass('fa-chevron-up').removeClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tabs').slideUp();
        $('#tab' + id).slideDown();
    }
});


$("#register").click(function () {
    if ($("#signupform").valid()) {
        $.ajax({
            url: "mail",
            type: "POST",
            data: $('#signupform').serialize(),
            success: function (data) {
                $('.msgs').slideDown();
                $("#signupform")[0].reset();
            }
        });
    }
});



// $('.hamburger').click(function() {
//     $('.sidenav .hamburger ').addClass('is-active');
// });

// $('.sidenav .hamburger').click(function() {
//     $('.header .hamburger').removeClass('is-active');
// });

$(window).scroll(function() {
   if($(this).scrollTop() >= 500) {
       $('.footer .scrollTop').fadeIn('slow');
   } else {
       $('.footer .scrollTop').fadeOut('slow');
   }
});

$('.footer .scrollTop').click(function() {
    $('html,body').animate({
        scrollTop:$('.vaybanner').offset().top
    }, 1000);
});

// if (jQuery(window).width() > 767) {

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
// }