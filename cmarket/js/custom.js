$('.restab2 a').click(function() {
    var tabVal = $(this).attr('data-tag');
    $('.commn').removeClass('showTab');
    $("#" + tabVal).addClass('showTab');
});


$('.readBtn').click(function() {
    $('.moretext').slideDown();
    if ($(this).text() == 'READ MORE') {
        $(this).text('less');
    } else {
        $('.moretext').slideUp();
        $(this).text('READ MORE');
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

$('.slick').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
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

$('.slick2').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 2,
    adaptiveHeight: true,
});

$('.notification_slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
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

$('.drop_menu_s li a').click(function() {
    var elms = $(this).text();
    var elmIm = $(this).children('img').attr("src");
    $('.dropbtn1 span').text(elms);
    $('.dropbtn1 img.changFlg').attr("src", elmIm);
    $(this).parents('.drop_menu').slideUp();
    $(this).parents('.drop_down').find('.dropbtn').removeClass('active');
    $(this).parents('.drop_down').find('img.rotate').removeClass('rotatearrow');
});

$('.drop_menu_s2 li a').click(function() {
    var elms = $(this).text();
    $('.dropbtn2 span').text(elms);
    $(this).parents('.drop_menu').slideUp();
    $(this).parents('.drop_down').find('.dropbtn').removeClass('active');
    $(this).parents('.drop_down').find('img.rotate').removeClass('rotatearrow');
});

$('.drop_menu_s3 li a').click(function() {
    var elms = $(this).text();
    var elmIm = $(this).children('img').attr("src");
    $('.dropbtn3 span').text(elms);
    $('.dropbtn3 img.changFlg').attr("src", elmIm);
    $(this).parents('.drop_menu').slideUp();
    $(this).parents('.drop_down').find('.dropbtn').removeClass('active');
    $(this).parents('.drop_down').find('img.rotate').removeClass('rotatearrow');
});

$('.drop_down .dropbtn').click(function() {
    if ($(this).hasClass('active')) {
        $('.drop_menu').slideUp();
        $('.dropbtn').removeClass('active');
        $('.rotate').removeClass('rotatearrow');
    } else {
        $('.drop_menu').slideUp();
        $('.dropbtn').removeClass('active');
        $('.rotate').removeClass('rotatearrow');
        $(this).addClass('active');
        $(this).next('.drop_menu').slideDown();
        $(this).children('.rotate').addClass('rotatearrow');
    }
});

// order history dropdown
$('.myaccdrop_down .myaccdropbtn').click(function() {
    if ($(this).hasClass('active')) {
        $('.accdrop_menu').slideUp();
        $('.myaccdropbtn').removeClass('active');
        $('.rotate').removeClass('rotatearrow');
    } else {
        $('.accdrop_menu').slideUp();
        $('.myaccdropbtn').removeClass('active');
        $('.rotate').removeClass('rotatearrow');
        $(this).addClass('active');
        $(this).next('.accdrop_menu').slideDown();
        $(this).children('.rotate').addClass('rotatearrow');
    }
});
$('.accdrop_menu li a').click(function() {
    var elms = $(this).text();
    $('.myaccdropbtn span').text(elms);
    $(this).parents('.accdrop_menu').slideUp();
    $(this).parents('.myaccdrop_down').find('.myaccdropbtn').removeClass('active');
    $(this).parents('.myaccdrop_down').find('img.rotate').removeClass('rotatearrow');
});
// order history dropdown

// $('.rotate').toggleClass('rotatearrow');
// $('.dropbtn1').click(function(){
//     $('.drop_menu_s2').slideUp();
//     $('.drop_menu_s3').slideUp();
// });
// $('.dropbtn2').click(function(){
//     $('.drop_menu_s').slideUp();
//     $('.drop_menu_s3').slideUp();
// });
// $('.dropbtn3').click(function(){
//     $('.drop_menu_s').slideUp();
//     $('.drop_menu_s2').slideUp();
// });
$('.carddropbtn').click(function() {
    $(this).next('.card_drop_menu').slideToggle();
    $(this).children('.rotate').toggleClass('rotatearrow');
});

$('.card_drop_menu_s1 li a').click(function() {
    var elms = $(this).text();
    $('.carddropbtn1 span').text(elms);
    $(this).parents('.card_drop_menu').slideUp();
});
$('.card_drop_menu_s li a').click(function() {
    var elmss = $(this).text();
    $('.carddropbtn2 span').text(elmss);
    $(this).parents('.card_drop_menu').slideUp();
});

// career page button
$('.cate_drop_down .cate_dropbtn').click(function() {
    if ($(this).hasClass('active')) {
        $('.cate_drop_menu').slideUp();
        $('.cate_dropbtn').removeClass('active');
        $('.rotate').removeClass('rotatearrow');
    } else {
        $('.cate_drop_menu').slideUp();
        $('.cate_dropbtn').removeClass('active');
        $('.rotate').removeClass('rotatearrow');
        $(this).addClass('active');
        $(this).next('.cate_drop_menu').slideDown();
        $(this).children('.rotate').addClass('rotatearrow');
    }
});
$('.cate_drop_menu_s1 li a').click(function() {
    var elms = $(this).text();
    $('.cate_dropbtn1 span').text(elms);
    $(this).parents('.cate_drop_menu').slideUp();
    $(this).parents('.cate_drop_down').find('.cate_dropbtn').removeClass('active');
    $(this).parents('.cate_drop_down').find('img.rotate').removeClass('rotatearrow');
});
$('.cate_drop_menu_s2 li a').click(function() {
    var elms = $(this).text();
    $('.cate_dropbtn2 span').text(elms);
    $(this).parents('.cate_drop_menu').slideUp();
    $(this).parents('.cate_drop_down').find('.cate_dropbtn').removeClass('active');
    $(this).parents('.cate_drop_down').find('img.rotate').removeClass('rotatearrow');
});
$('.cate_drop_menu_s3 li a').click(function() {
    var elms = $(this).text();
    $('.cate_dropbtn3 span').text(elms);
    $(this).parents('.cate_drop_menu').slideUp();
    $(this).parents('.cate_drop_down').find('.cate_dropbtn').removeClass('active');
    $(this).parents('.cate_drop_down').find('img.rotate').removeClass('rotatearrow');
});
// career page button

// gift card page
$('.prsnl_gft_lft .tick input').click(function() {
    var elmChk = $(this).is(':checked');
    if (elmChk) {
        $(this).next('label').css('color', '#8f8f8f');
    } else {
        $(this).next('label').css('color', '#181818');
    }
});

$('.gift_cont a').click(function() {
    var elmTxt = $(this).text();
    $(this).parents('div.gift_cont').siblings('button.filDrop_btn').find('span').text(elmTxt);
});
// gift card page

// tracking page start

$('.mapview').hover(function() {
    $('.notification_slider').fadeIn(150);
}, function() {
    $('.notification_slider').fadeOut(150);
});

$('.res_map').hover(function() {
    $('.notification_slider').fadeIn(150);
}, function() {
    $('.notification_slider').fadeOut(150);
});

$('.likebtns a').click(function() {
    $(this).toggleClass('imghideshow');
});
// tracking page start

/*----------------ffffffffff-------------*/
$(".plus_btn").click(function() {
    var $n = $(this).parent(".vaulebox").find(".qty");
    $n.val(Number($n.val()) + 1);
});

$(".minus_btn").click(function() {
    var $n = $(this).parent(".vaulebox").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount - 1);
    }
});

$('.filDrop_btn').click(function() {
    $(this).siblings('.filDrop_content').slideToggle(300);
})

$('.filDrop_content a').click(function() {
    $(this).parents('div.filDrop_content').slideUp(300);
})

$('.filDrop_content a').click(function() {
    var elmTxt = $(this).text();
    $(this).parents('div.filDrop_content').siblings('button.filDrop_btn').find('span').text(elmTxt);
});
//accordion

$(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".content").slideUp(200);
        $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    } else {
        $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
        $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this).siblings(".content").slideDown(200);
    }

    $(this).children('img').toggleClass('rotatImg');
});

$('.heart_icon').click(function() {
    $(this).children('i').toggleClass('h_active');
});

var i = 3;
$('.next').click(function() {
    var elmLi = $('.pagination_route ul li a').length;
    if (i <= 7) {
        i++;
        $('.pagination_route ul li a').removeClass('active');
        $('.pagination_route ul li:nth-child(' + i + ') a').addClass('active');
    }
});

var i = 3;
$('.prev').click(function() {
    var elmLi = $('.pagination_route ul li a').length;
    if (i => 6) {
        i--;
        $('.pagination_route ul li a').removeClass('active');
        $('.pagination_route ul li:nth-child(' + i + ') a').addClass('active');
    }
});

$('.slides_food li').click(function() {
    var elmL = $(this).find('img').attr('src');
    $('.slide_img img').hide();
    $('.slide_img img').attr('src', elmL);
    $('.slide_img img').fadeIn();
});

$('.slides button.arrow_up').click(function() {
    var cP = $('.slides').height();
    var eP = $('.slides ul').height();
    var lH = $('.slides ul li').height() + 10;
    //    var pos = (cP - eP) ;
    $('.slides ul').css('transform', 'translateY(' + -(lH) + 'px)');
});

$('.slides button.arrow_down').click(function() {
    var cP = $('.slides').height();
    var eP = $('.slides ul').height();
    var lH = $('.slides ul li').height() - 10;
    $('.slides ul').css('transform', 'translateY(' + lH + 'px)');
});


$('.tabs_menu a').click(function() {
    $('.tabs_menu a').removeClass('active');
    $(this).addClass('active');
});

$('.filter_menu a').click(function() {
    $('.filter_menu a').removeClass('active');
    $(this).addClass('active');
});

$('.tabs_menu a').click(function() {
    var tag_id = $(this).attr('data-tag');
    //    $('.commTabC').addClass('hideSec');
    $('.commTabC').hide();
    $('#' + tag_id).removeClass('hideSec');
    $('#' + tag_id).fadeIn(700);
});



$('.time_inner ul li a').click(function() {
    $('.time_inner ul li').removeClass('active');
    $(this).parents('.time_inner ul li').addClass('active');
});

$('.res_showbtn').click(function() {
    $('.useracclink').slideToggle();
    $('.res_showbtn .rotate').toggleClass('rotatearrow');
});

$('.pro_drop').click(function() {
    $('.pro_drop_menu').slideToggle();
    $('.pro_drop .rotate').toggleClass('rotatearrow');
});


$('.top').click(function() {
    $('html,body').animate({
        scrollTop: $('.topScrl').offset().top - 150
    }, 500);
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 500) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$('.more_btn').click(function() {
    $('.more_Links').slideToggle();
    $('.more_btn img').toggleClass('rotatearrow');
});

//9-/5-19

$('.add_btn').click(function() {
    if ($(window).width() <= 414) {
        $('.downPop').slideDown(300);
        $('.resModal').fadeIn();
    }
});

$('.cncl_btn').click(function() {
    $('.resModal').fadeOut();
});

$(window).on('scroll', function() {
    //    var elmmH = $('#setStc').offset().top;
    if ($(this).width() <= 414 && $(this).scrollTop() > 300) {
        $('.res_prod_cat .catResStck').addClass('catSticky');
        $('.search_stick').addClass('ser_Sticky');

    } else {
        $('.res_prod_cat .catResStck').removeClass('catSticky');
        $('.search_stick').removeClass('ser_Sticky');
    }
});


$(window).on('scroll', function() {
    //    var sTop = $('#resScrl_t').offset().top;
    var sTop = $('.rest_details_res').height();
    if ($(this).width() <= 560 && $(this).scrollTop() > sTop) {
        $('.restab').addClass('stickyBar');
        $('.fil_menu_inr').addClass('stiBar');
    } else {
        $('.restab').removeClass('stickyBar');
        $('.fil_menu_inr').removeClass('stiBar');
    }
});

window.onclick = function(event) {
    var elM = document.getElementById('mdl');
    if (event.target == elM) {
        document.getElementById('mdl').style.display = 'none';
    }
}

$('.sidenav a').click(function() {
    $(this).toggleClass('bdrbtm');
});

$('.cart_p li.cartWidth').click(function() {
    if ($(window).width() <= 414) {
        $('.downPop').slideDown(300);
    }
});

$('.locationbtn input').keyup(function() {

    if (event.keyCode === 13) {
        $('.mapshowbox .map_inner').slideDown();
        $('.banner').css("padding-bottom", "360px");
    }
});

// search slide down start
$('.searchbox .input_group .form-control').keyup(function() {
    var value = $(this).val();
    // alert(value);
    if (value !== '') {
        $('.searchresults').slideDown();
        if (event.keyCode === 13) {
            $(window.open("cart.html", "_self"));
        } else if ($(".sear_cont a").click(function() {
                $(window.open("cart.html", "_self"));
            }));
    } else {
        $('.searchresults').slideUp();
    }
});
$('body,html').click(function() {
    $('.searchresults').slideUp();
});
$('.searchbox ').click(function() {
    event.stopPropagation();
});
// search slide down end


// $('.banner').click(function() {
//     $('.mapshowbox .map_inner').slideUp();
// });

// $('.locationbtn input').click(function() {
//     event.stopPropagation();
// });