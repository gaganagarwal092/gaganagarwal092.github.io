$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
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

$('.hamburger1').click(function () {
    if ($(this).hasClass('is-active')) {
        $('#mySidenav').fadeIn();
    } else {
        $('#mySidenav').fadeOut();
    }
    $('.sidehmbrg').addClass('is-active');
});

$('.hamburger_dsk').click(function () {
    if ($(this).hasClass('is-active')) {
        $('.hamburger-inner').addClass('nomargin');
    }
});

$('.sidehmbrg').click(function () {
    $('.hamburger1').removeClass('is-active');
    $('#mySidenav').fadeOut();
})

$('.sidenav ul li').click(function () {
    if ($(this).hasClass('actv')) {
        $(this).removeClass('actv');
        $(this).find('div.drop_cont').slideUp();
    } else {
        $('.sidenav ul li').removeClass('actv');
        $(this).addClass('actv');
        $('div.drop_cont').slideUp();
        $(this).find('div.drop_cont').slideDown();
    }
});


$('.sidenav ul li a').click(function () {
    $('.sidenav ul li a').removeClass('active');
    $(this).addClass('active');
});


$('.hamburger_dsk').click(function () {
    $('body').toggleClass('marginLft');
    $('.location_bar').toggleClass('locationBrrht');
    $(this).toggleClass('bgColor');
});

$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(500);
            $(".set > a i").removeClass("fa-caret-down rotate").addClass("fa-caret-down");
        } else {
            $(".set > a i").removeClass("fa-caret-down rotate").addClass("fa-caret-down");
            $(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-down rotate");

            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(500);
            $(this).siblings(".content").slideDown(500);
        }
    });
});

$('.sub_menu').hover(function () {
    $(this).parent('.menu li').children('.menu li a').css({
        'color': '#53b848',
        'z-index': '9'
    });
});

$('.sub_menu').mouseleave(function () {
    $(this).parent('.menu li').children('.menu li a').css({
        'color': 'initial',
        'z-index': 'initial'
    });
});

$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
       $('.moveTop').fadeIn(); 
    }else {
       $('.moveTop').fadeOut(); 
    }
})

$('.moveTop').click(function() {
    $('html,body').animate({
        scrollTop:$('.banner').offset().top
    },500);
});


$('.select_bx').click(function() {
   $(this).children('ul').slideToggle();
});

$('.select_bx_cnt li').click(function() {
   var elmTxt = $(this).text(); 
   $(this).parent('ul').prev('button').find('span').text(elmTxt); 
});

$('.select_bx1').click(function() {
    $('.select_bx2').children('ul').slideUp();
});

$('.select_bx2').click(function() {
    $('.select_bx1').children('ul').slideUp();
});

$(document).on("click", function (event) {
    var $trigger = $(".select_bx");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".select_bx ul").slideUp("fast");
    }
});

