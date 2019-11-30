$('.notify a:first-child').click(function () {
    $(this).toggleClass('active');
});
$('.notify a:last-child').click(function () {
    $(this).toggleClass('active2');
});


$(document).ready(function(){
    $('select').niceSelect();
});

//passcode js start

// $('.number_confirm .form-control').click(function(){
//     $(".keypad").slideDown();
// });

$(function () {
    $(".numberline").click(function () {

        var value = $(this).find(".num").text();

        if (value !== "<") {
            $(".numberinput").each(function () {
                var a = $(this).children('span').text();
                if (!a) {
                    $(this).children('span').text(value);
                    $(this).addClass("nocircle");
                    return false;
                }
            });
        } else {
            $($(".numberinput").get().reverse()).each(function () {
                var a = $(this).text();
                if (a) {
                    $(this).text("");
                    $(this).removeClass("nocircle");
                    return false;
                }
            });
        }
    });
});

//passcode js ends


// $(window).scroll(function () {
//     if ($(window).scrollTop() >= 45) {
//         $('.header').addClass('fixed_header');
//     }
//     else {
//         $('.header').removeClass('fixed_header');
//     }
// }); 
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
        $('.djanggoinner, .header .navbar.home2_navbar,.header.home_header .navbar').css({'margin-left': "270px"});
    }
    else {
        $('#mySidenav').css('left', '-270px');
        $('.djanggoinner, .header .navbar.home2_navbar,.header.home_header .navbar').css({'margin-left': "0px"});
    }
});
$('.slick').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 2,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                
            }
        }]
});
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
                    }, 2000, function () {
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