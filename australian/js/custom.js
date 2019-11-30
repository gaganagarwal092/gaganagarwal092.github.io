$('.myslider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    adaptiveHeight: false,
    // vertical:true,
});
$('.myslider-logos1').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    adaptiveHeight: false,
    // vertical:true,
});
$('.myslider-logos').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    adaptiveHeight: false,
    // vertical:true,
    responsive: [
        {
            breakpoint:991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint:767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint:414,
            settings: {
                slidesToShow: 1,
            }
        }
     

    ]
});


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
    }
    else {
        $('#mySidenav').css('left', '-250px');
    }
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 5) {
        $('.header').addClass('fixed_header');
    }
    else {
        $('.header').removeClass('fixed_header');
    }
});

$('#right_arrow_res').click(function () {
    $('.scroll-text_2').animate({
        scrollLeft: "+=200px"
    }, "slow");

});

$('#left_arrow_res').click(function () {
    $('.scroll-text_2').animate({
        scrollLeft: "-=200px"
    }, "slow");
});

$(document).ready(function () {
    $('.all').hide();
    $('.all1').show();
    $('.clickme').click(function () {
        var type = $(this).data('type');
        $('.all').hide();
        $('.all' + type).fadeIn();
        $('.clickme').removeClass('active');
        $(this).addClass('active');
    });
});


  