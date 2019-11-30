$('.sidenav').scroll(function () {
    if ($(this).scrollTop() >= 1) {
        $('.closed').css({
            'position':'fixed',
            "right":"40px"
        });
    }
    else {
        $('.closed').css('position','fixed');
    }
}); 
$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    }
    else {
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

$('.hamburger').click(function () {
    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px'); 

    }
    else {
        $('#mySidenav').css('left', '-101%');
    }
    $('.hamburger').removeClass('is-active');
    setTimeout(function() {
        $('.closed').show();
    },300);
});
$('.back').click(function () {
    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-101%');
    }
    $('.hamburger').removeClass('is-active');
    $('.backcolor').removeClass('active');
    setTimeout(function() {
        $('.closed').hide();
    },100);
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
$('.imageGallary a').on('click', function () {
    var model = $('.model_wrap');
    var imgLink = $(this).children('img').attr('src');
    model.append('<div class="popup scroll fadeIn boxs"><div class="popup_inner fade"> <div class="dem_empty"><img src="' + imgLink + '" class="p_img img-responsive"><span class="remove">X</span></div></div></div>');
    $('body').addClass('overflow');

});

$(document).on("click", "span.remove", function () {
    $('.popup_inner').parent().css('display','none');
    $('body').removeClass('overflow');
});

$(document).on("click", ".popup", function () {
    $(this).css('display','none');
    $('body').removeClass('overflow');
});

$(document).on('click','.p_img', function(e){
    e.preventdefault();
});

$(window).load(function() {
    $('.empty').wrapAll("<div class='demo'></div>");
    $('.empty1').wrapAll("<div class='demo'></div>");
    $('.empty2').wrapAll("<div class='demo'></div>");
    $('.empty3').wrapAll("<div class='demo'></div>");
    $('.empty4').wrapAll("<div class='demo'></div>");
    $('.empty5').wrapAll("<div class='demo'></div>");
    $('.empty13').wrapAll("<div class='demo'></div>");
    $('.empty14').wrapAll("<div class='demo'></div>");
    $('.empty15').wrapAll("<div class='demo'></div>");
    $('.empty16').wrapAll("<div class='demo'></div>");
    $('.empty17').wrapAll("<div class='demo'></div>");
});

$(document).on('click','.btn_page', function() {
    $('.empty').wrapAll("<div class='demo'></div>");
    $('.empty1').wrapAll("<div class='demo'></div>");
    $('.empty2').wrapAll("<div class='demo'></div>");
    $('.empty3').wrapAll("<div class='demo'></div>");
    $('.empty4').wrapAll("<div class='demo'></div>");
    $('.empty5').wrapAll("<div class='demo'></div>");
    $('.empty6').wrapAll("<div class='demo1'></div>");
    $('.empty7').wrapAll("<div class='demo1'></div>");
    $('.empty8').wrapAll("<div class='demo1'></div>");
    $('.empty9').wrapAll("<div class='demo1'></div>");
    $('.empty10').wrapAll("<div class='demo1'></div>"); 
    $('.empty11').wrapAll("<div class='demo1'></div>"); 
    $('.empty12').wrapAll("<div class='demo1'></div>");
    $('.empty13').wrapAll("<div class='demo'></div>");
    $('.empty14').wrapAll("<div class='demo'></div>");
    $('.empty15').wrapAll("<div class='demo'></div>");
    $('.empty16').wrapAll("<div class='demo'></div>");
    $('.empty17').wrapAll("<div class='demo'></div>"); 
    $('.empty18').wrapAll("<div class='demo'></div>"); 
    $('.empty19').wrapAll("<div class='demo'></div>"); 
    $('.empty20').wrapAll("<div class='demo'></div>"); 
    $('.empty21').wrapAll("<div class='demo'></div>"); 
    $('.empty22').wrapAll("<div class='demo'></div>"); 
    $('.empty23').wrapAll("<div class='demo'></div>");
    $('.empty24').wrapAll("<div class='demo'></div>");
    $('.empty25').wrapAll("<div class='demo'></div>");
    $('.empty26').wrapAll("<div class='demo'></div>"); 
    $('.empty27').wrapAll("<div class='demo'></div>");
    $('.empty28').wrapAll("<div class='demo'></div>");
    $('.empty29').wrapAll("<div class='demo'></div>");
});
$(document).on('click','.value_con', function() {
    $('.empty').wrapAll("<div class='demo'></div>");
    $('.empty1').wrapAll("<div class='demo'></div>");
    $('.empty2').wrapAll("<div class='demo'></div>");
    $('.empty3').wrapAll("<div class='demo'></div>");
    $('.empty4').wrapAll("<div class='demo'></div>");
    $('.empty5').wrapAll("<div class='demo'></div>");
    $('.empty6').wrapAll("<div class='demo1'></div>");
    $('.empty7').wrapAll("<div class='demo1'></div>");
    $('.empty8').wrapAll("<div class='demo1'></div>");
    $('.empty9').wrapAll("<div class='demo1'></div>");
    $('.empty10').wrapAll("<div class='demo1'></div>"); 
    $('.empty11').wrapAll("<div class='demo1'></div>"); 
    $('.empty12').wrapAll("<div class='demo1'></div>");
    $('.empty13').wrapAll("<div class='demo'></div>");
    $('.empty14').wrapAll("<div class='demo'></div>");
    $('.empty15').wrapAll("<div class='demo'></div>");
    $('.empty16').wrapAll("<div class='demo'></div>");
    $('.empty17').wrapAll("<div class='demo'></div>"); 
    $('.empty18').wrapAll("<div class='demo'></div>"); 
    $('.empty19').wrapAll("<div class='demo'></div>"); 
    $('.empty20').wrapAll("<div class='demo'></div>"); 
    $('.empty21').wrapAll("<div class='demo'></div>"); 
    $('.empty22').wrapAll("<div class='demo'></div>"); 
    $('.empty23').wrapAll("<div class='demo'></div>"); 
    $('.empty24').wrapAll("<div class='demo'></div>");
    $('.empty25').wrapAll("<div class='demo'></div>");
    $('.empty26').wrapAll("<div class='demo'></div>"); 
    $('.empty27').wrapAll("<div class='demo'></div>");
    $('.empty28').wrapAll("<div class='demo'></div>");
    $('.empty29').wrapAll("<div class='demo'></div>");
});
$('.value_con').click(function(){
    $(".contentul li a").removeClass("active");
    $(this).addClass("active");
});

$(document).on('click','.btn_page', function() {
    $('html, body').animate({
        scrollTop: $('.sculpture').offset().top - 100
    });
});

$(document).on('click','.value_con',function() {
    $('html, body').animate({
        scrollTop: $('.sculpture').offset().top - 100
    });
});


jplist.init();