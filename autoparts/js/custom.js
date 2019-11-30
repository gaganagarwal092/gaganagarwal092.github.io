$('.inntabbx ul li').click(function() {
    var comTab = $(this).attr('data-tag');
    $('.commTabS').removeClass('showCmmTab');
    $('#' + comTab).addClass('showCmmTab');
});

$('.inntabbx ul li ').click(function() {
    $('.inntabbx ul li ').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function() {
    $('.adsbx_in .loadSec:hidden').slice(0, 9).show();
    $('.btn_load').click(function() {
        $('.adsbx_in .loadSec:hidden').slice(0, 3).slideDown();
        if ($('.adsbx_in .loadSec:hidden').length === 0) {
            $('.btn_load').fadeOut('fast');
        }
    });
});

$('.tab_menu li').click(function() {
    var tabVal = $(this).attr('data-tag');
    $('.tab_menu li').removeClass('active');
    $(this).addClass('active');
    $('.adsbx_in').removeClass('showTabSec');
    $('#' + tabVal).addClass('showTabSec');
});



$('.dropBox button').click(function() {
    $('.dropBox .dropCntnt').slideToggle();

});

$('.dropBox .dropCntnt li').click(function() {
    $(this).parent('ul').slideUp();
    var elmTxtt = $(this).text();
    $('.dropBox button span').text(elmTxtt);
});

$(document).on("click", function(event) {
    var $trigger = $(".dropBox");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".dropBox .dropCntnt").slideUp("fast");
    }
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
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-250px');
    }
});

$('.arrowdwn').click(function() {
    $('html,body').animate({
        scrollTop: $('.searchImg').offset().top - 80
    }, 500);
});

$('.chatBx a').click(function() {
    $('.chat_bar').css('right', '0');
    $('.adsbx_in').addClass('moveSide');
});

$('.chat_bar .chat_bar_in h2 i').click(function() {
    $('.chat_bar').css({
        'right': '-100%',
        'trnasition': 'all 1s'
    });

    $('.adsbx_in').removeClass('moveSide');
});

$('.drop_down button').click(function() {
    $('.flgmenu').slideToggle();
});
$('.signup_drop_main a').click(function() {
    $('.signup_drop').slideToggle();
});

$('.flgmenu li').click(function() {
    var elmpath = $(this).children('img').attr("src");
    var txt = $(this).text();
    $(this).parents('ul.flgmenu').prevAll('button').find('span').text(txt);
    $(this).parents('ul.flgmenu').prevAll('button').find('img').attr('src', elmpath);
    $(this).parents('ul.flgmenu').slideUp();
});

$(document).on("click", function(event) {
    var $trigger = $(".drop_down button");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("ul.flgmenu").slideUp("fast");
    }
});


$('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,

        }
    }]
});

$('.singup_slider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
});

$('.pslider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
});

$('.signup_headimg a').click(function() {
    var sTab = $(this).attr('data-tag');
    $('.signup_headimg a').removeClass('active');
    $(this).addClass('active');
    $('.form_field').removeClass('showform');
    $("#" + sTab).addClass('showform');
});


var elmf1 = document.getElementById('upload1');
elmf1.addEventListener('change', function(e) {
    var url = URL.createObjectURL(e.target.files[0]);
    document.getElementById('preview1').src = url;
});

var elmf2 = document.getElementById('upload2');
elmf2.addEventListener('change', function(e) {
    var url = URL.createObjectURL(e.target.files[0]);
    document.getElementById('preview2').src = url;
});

var elmf3 = document.getElementById('upload3');
elmf3.addEventListener('change', function(e) {
    var url = URL.createObjectURL(e.target.files[0]);
    document.getElementById('preview3').src = url;
});

var elmf4 = document.getElementById('upload4');
elmf4.addEventListener('change', function(e) {
    var url = URL.createObjectURL(e.target.files[0]);
    document.getElementById('preview4').src = url;
});


var elm = document.getElementById('fileupld');
elm.addEventListener('change', function(e) {
    var url = URL.createObjectURL(e.target.files[0]);
    document.getElementById('preview').src = url;
});




//$(document).ready(function () {
//    $('.latesAds').wrap("<a href='details.html'></a>");
//});