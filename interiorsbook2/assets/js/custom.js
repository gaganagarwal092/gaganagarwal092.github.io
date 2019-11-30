AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});

$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});



$(window).scroll(function() {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});
var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function() {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('top', '0px');
    } else {
        $('#mySidenav').css('top', '-100%');
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
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
});

$('.header .navbar-nav li:nth-child(1) a, .footer_top .commstyl ul li:nth-child(1) a, .sidenav a:nth-child(1)').click(function() {
    $('html,body').animate({
        scrollTop: $('.banner').offset().top - 30
    }, 500)
    $('#mySidenav').css('top', '-100%');
    $('.hamburger').removeClass("is-active");
});
$('.header .navbar-nav li:nth-child(2) a,.footer_top .commstyl ul li:nth-child(2) a, .sidenav a:nth-child(2)').click(function() {
    $('html,body').animate({
        scrollTop: $('.packages').offset().top - 30
    }, 500)
    $('#mySidenav').css('top', '-100%');
    $('.hamburger').removeClass("is-active");
});
$('.header .navbar-nav li:nth-child(3) a,.footer_top .commstyl ul li:nth-child(3) a, .sidenav a:nth-child(3)').click(function() {
    $('html,body').animate({
        scrollTop: $('.story').offset().top - 30
    }, 500)
    $('#mySidenav').css('top', '-100%');
    $('.hamburger').removeClass("is-active");
});
$('.header .navbar-nav li:nth-child(4) a,.footer_top .commstyl ul li:nth-child(4) a, .sidenav a:nth-child(4)').click(function() {
    $('html,body').animate({
        scrollTop: $('.concept').offset().top - 100
    }, 500)
    $('#mySidenav').css('top', '-100%');
    $('.hamburger').removeClass("is-active");
});
$('.header .navbar-nav li:nth-child(5) a,.footer_top .commstyl ul li:nth-child(5) a, .sidenav a:nth-child(5)').click(function() {
    $('html,body').animate({
        scrollTop: $('.work').offset().top - 30
    }, 500)
    $('#mySidenav').css('top', '-100%');
    $('.hamburger').removeClass("is-active");
});



$('.footer_top .rwork ul li a').click(function() {
    $('html,body').animate({
        scrollTop: $('.work').offset().top - 30
    }, 500)
});