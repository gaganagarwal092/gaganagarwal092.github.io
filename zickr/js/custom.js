$('.showform').click(function () {
    $('html,body').animate({
        scrollTop: $('.Contact').offset().top
    }, 1000)
    $('.ready').css("left", "0%");
});
$('.showform2').click(function () {
    $('html,body').animate({
        scrollTop: $('.Contact').offset().top
    }, 1000)
    $('.startsratch').css("left", "0%");
});
$('.showform3').click(function () {
    $('html,body').animate({
        scrollTop: $('.Contact').offset().top
    }, 1000)
    $('.subtle').css("left", "0%");
});
$('.conatctheading a').click(function () {
    $('.contact_form').css("left", "-100%");
});
$('.close a').click(function () {
    $('.contact_form').css("left", "-100%");
});
$('.attach').click(function () {
    $('.hoverlist').toggle();
});
$('.dropbox').click(function () {
    var elmImg = $('.dropbox img').attr('src');
    $('.enter').show();
    $('.file_name').hide();
    $('.hoverlist').hide();
    $('.attach span').text('Drop Box');
    $('.attach img').attr({
        "src": elmImg
    });
});
$('.google').click(function () {
    var elmImg = $('.google img').attr('src');
    $('.enter').show();
    $('.file_name').hide();
    $('.hoverlist').hide();
    $('.attach span').text('google drive');
    $('.attach img').attr({
        "src": elmImg
    });
});
$('.chose').click(function () {
    var elmImg = $('.chose img').attr('src');
    $('.enter').hide();
    $('.file_name').show();
    $('.hoverlist').hide();
    $('.attach span').text('attach a file');
    $('.attach img').attr({
        "src": elmImg
    });
});

$('.procontent').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.proimages'
});
$('.proimages').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.procontent',
    arrows: true,
    fade: true,
    // focusOnSelect: true
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: true,
    fade: true,
    // focusOnSelect: true
});


$(".clickme").click(function () {
    // $('.brand_div').addClass('elementToFadeInAndOut');
    $(".brand a").removeClass("active");
    $(this).children().addClass("active");
    $(".brand_div").show();
    $(".ui_div").hide();
});
$(".second_click").click(function () {
    // $('.ui_div').addClass('elementToFadeInAndOut');
    $(".brand_div").hide();
    $(".ui_div").show();
    $(".brand a").removeClass("active");
    $(this).children().addClass("active");
});

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

$('.menu').click(function () {
    $('#mySidenav').css('top', '51px');
});
$('.menuclose').click(function () {
    $('#mySidenav').css('top', '-100%');
});
$('.menu').click(function () {
    if ($(window).width() <= 414) {
        $('#mySidenav').css('top', '40px');
    }
});

$('.slick-test').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    adaptiveHeight: true,
});
$('.tab').click(function () {
    if ($(this).hasClass('active')) {
        $('.tab').find('span').removeClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $('.tabs').slideUp();
    } else {
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


$('.movesA').hide();
$('.movesa').show();
$('.listing').click(function () {
    var type = $(this).data('type');
    $('.movesA').hide();
    $('.moves' + type).fadeIn();
    $('.listing').removeClass('active');
    $(this).addClass('active');
});

var j = 0;

function contentList() {
    if (j < 4) {
        j++;

        $('.method_lft').css("display", "none");
        $(".method_img .method_lft:nth-child(" + j + ")").css("display", "block");

        $('.list ul li a').removeClass("active");
        $('.list ul li a').blur();
        $(".list ul li:nth-child(" + j + ") a").addClass("active");

    } else {
        j = 0;
    }
}

var setTime = setInterval(contentList, 3000);

var k = 0;

function contentList2() {
    if (k < 3) {
        k++;

        $('.commit_rht ul li a').removeClass("active");
        $('.commit_rht ul li a').blur();
        $(".commit_rht ul li:nth-child(" + k + ") a").addClass("active");

    } else {
        k = 0;
    }
}

var setTime2 = setInterval(contentList2, 2000);

$('.menu_h li:nth-child(4) , .sidenav .con').click(function () {
    $('html,body').animate({
        scrollTop: $('.Contact').offset().top - 50
    }, 1000)
});

$('.menu_h li a.servS, .sidenav a.servS').click(function () {
    $('html,body').animate({
        scrollTop: $('.branding').offset().top - 20
    }, 1000);
});

$('.sidenav a').click(function () {
    $('.sidenav').css('top', '-100%');
})

$('.sidenav .con1').click(function () {
    $('html,body').animate({
        scrollTop: $('.Contact').offset().top - 90
    }, 1000)
});

$('.prod_menu_h li a.servLin, .sidenav a.servLin').click(function () {
    window.open("index.html#serviceSect_n", "_self");
});


/*--------------*/

var input = document.getElementById('file-upload');
var infoArea = document.getElementById('file-upload-filename');

input.addEventListener('change', showFileName);

function showFileName(event) {
    // $('.hoverlist').hide();
    var elmImg = $('.chose img').attr('src');
    $('.enter').hide();
    $('.file_name').show();
    $('.hoverlist').hide();
    $('.attach span').text('attach a file');
    $('.attach img').attr({
        "src": elmImg
    });

    // the change event gives us the input it occurred in 
    var input = event.srcElement;

    // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
    var fileName = input.files[0].name;

    // use fileName however fits your app best, i.e. add it into a div
    infoArea.textContent = fileName;
}
$(window).on("load", function () {
    var elmD = $('.forcolor').css("background-color");
    if ($(this)) {
        $('.menu_h .con a').css("color", elmD);
        $('.logo a svg g').attr({
            "fill": elmD
        })
        $('.sidenav').css("background-color", elmD);
    } else {
        $('.top ul li').css("color", "initial");
    }
});

$('.squardslider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 2,
    // fade:true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1,

            }
        }]
});



//scrolling
$(window).on("load", function () {
    if ($(this).width() >= 768) {
        var sections = $('.case_rht div.scrollComm');
        var nav = $('.caselisting');
        var nav_height = nav.innerHeight();

        $('.case_rht').on('scroll', function () {
            var cur_pos = $(window).scrollTop();

            sections.each(function () {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).innerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('a').removeClass('active');
                    sections.removeClass('active');

                    $(this).addClass('active');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        });

    }
});


$(window).scroll(function (event) {
    if ($(this).width() <= 767) {
        fixSect();
        changeActive();
    }
});

$('.case_rht').scroll(function () {
    if ($(window).width() <= 767) {
        fixSect();
    }
});

function fixSect() {
    var curr_po = $(window).innerHeight();
    var elmH = $('.case').offset().top;
    var elmHb = $('.related').offset().top - 100;
    var pos = elmH - curr_po;
    if ($(window).scrollTop() > elmH) {
        $('.case_lft').addClass('fixedTab');

    } else {
        $('.case_lft').removeClass('fixedTab');
    }

    if ($(window).scrollTop() > elmHb) {
        $('.case_lft').fadeOut();
    } else {
        $('.case_lft').fadeIn();
    }
}

function changeActive() {
    var sectionss = $('.case_rht div.scrollComm');
    var navs = $('.caselisting');
    var nav_width = navs.innerWidth();

    $('.case_rht').on('scroll', function () {
        var cur_pos = $(window).scrollTop();

        sectionss.each(function () {
            var top = $(this).offset().top - nav_width,
                bottom = top + $(this).innerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                navs.find('a').removeClass('active');
                sectionss.removeClass('active');

                $(this).addClass('active');
                navs.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
}

$(window).resize(function () {
    if ($(this).width() <= 767 && $(this).width() >= 500) {
        ChaScroll();
    }
});

function ChaScroll() {
    $('.case_rht').on("scroll", function () {
        var curr_pos = $(this).scrollTop();
        var dH = $(document).height();
        var wH = $(window).height();
        var newVal = (curr_pos - (dH / wH)) / 10;
        $('.caselisting ul').css("transform", "translateX(" + (-newVal) + "px)");
    });
}

$(window).resize(function () {
    if ($(this).width() <= 499) {
        ChaScroll2();
    }
})

function ChaScroll2() {
    $('.case_rht').on("scroll", function () {
        var curr_pos = $(this).scrollTop();
        var dH = $(document).height();
        var wH = $(window).height();
        var newVal = (curr_pos - (dH / wH)) / 8;
        $('.caselisting ul').css("transform", "translateX(" + (-newVal) + "px)");
    });
}
