$( document ).ready(function() {
    $('.index .video_img').css('opacity', '0.7');
});

// $(window).resize(function () {
//     forHeight();
// });
// forHeight();
// function forHeight() {
//     var height = $(document).height();
//     var heightt = $(".gallery").innerHeight();
//     var h = height - heightt;
//     $('.gallery').css('top', h + "px");
// }




$('.signupp').click(function () {
    $(".sign_up_banner img").attr("src","img/signillust.png");
});
$('.signinn').click(function () {
    $(".sign_up_banner img").attr("src","img/sign_up_img.png");
});
$('.forgotbtn').click(function () {
    $(".sign_up_banner img").attr("src","img/imgsignup.png");
});
$(document).ready(function() { 
    $('.gg').click(function() 
        { 
            $(this).parents(".rightminus").hide(1000);
            $(".sign_up .bottomdown").hide(1000);
            $(".sign_up .widthfull").animate({
                width: "100%",
                height: "100vh",
            }, 1000);
            $(".sign_up .sign_up_banner").fadeOut(1000);
            $(".sign_up .sign_up_left p.hidep").fadeOut(1000);
            $(".sign_up .sign_up_left a.logosign").css({"padding-left":"0px","margin": "0 auto"});
            $(".sign_up .sign_up_left").animate({                
                width: "100%",
            }, 1000);
            $(".sign_up").addClass("bgadd");
            // $(".spinner").show(function() {
            //     setTimeout(function(){ 
                    $("#myModalplan").modal();
            //      }, 5000);
            // });
    }); 
});


//deepak after and before class start
$(window).resize(function () {
    changeDiv();
});
changeDiv();
function changeDiv() {
    if ($(window).width() <= 991) {
        $('.before').insertBefore($('.after'));
    }
    else {
        $('.before').insertBefore($('.myContent'));
    }
}
//deepak after and before class End


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

$('.slick').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1000,
    fade: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }]
});

// main page start
$('.notification_bar .cross a').click(function () {
    $(this).parents('.notification_bar').slideUp();
    $('.header').css('top', '0');
    $('.main').css('margin-top', '0');
    $('.outerheight').removeClass('height');
    $('.sidenav').css('top', '0');
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
        
    }
    else {
        $('.header').removeClass('fixed_header');
        
       
    }
}); 

// function openCity1(evt, cityName) {
//     var ii, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tab_item");
//     for (ii = 0; ii < tabcontent.length; ii++) {
//         tabcontent[ii].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("switch");
//     for (ii = 0; ii < tablinks.length; ii++) {
//         tablinks[ii].className = tablinks[ii].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
function openCity1(evt, cityName) {
    $('.tab_item').hide();
    $('#'+cityName).show();
    $('.comm_tabs a').removeClass('active');
    evt.currentTarget.className += " active";
}



$( ".blureffect").hover(
  function() {
    $(this).children( ".gallery_items" ).css("filter","blur(4px)")     
    $(".blurbtnmain").fadeIn(350);
  }, function() {
    $(this).children(".gallery_items").css("filter","blur(0px)")
    $(".blurbtnmain").fadeOut(350);     
  }
);

// main page end


$(".signinn").click(function () {
    $(".steps").hide();
    $("#step1").show();
});
$(".signupp").click(function () {
    $(".steps").hide();
    $("#step2").show();
});
$(".forgotbtn").click(function () {
    $(".steps").hide();
    $("#step3").show();
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function (i) {
        if ($(this).offset().top <= scrollDistance + 130) {
            $('.navigation__link.active').removeClass('active');
            $('.navigation__link').eq(i).addClass('active');
        }
    });
}).scroll();
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
                    }, 500, function () {
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

$('.accordion-toggle').click(function (e) {
    var link = $(this).data('id');
    if ($(this).hasClass('active')) {
        $('#collapse' + link).slideUp();
        $(this).removeClass('active');
    }
    else {
        $('#collapse' + link).slideDown();
        $(this).addClass('active');
    }
});


$(document).ready(function () {
    $(".change2").click(function () {
        $('.monthChange').hide().css('transform', 'rotateY(90deg)');
        $(".yearChange").show();
        var a = 1;
        setTimeout(function () {
            $(".yearChange").css('transform', 'rotateY(0deg)');
            a++;
        }, 150);
        $(".change").addClass('colorchange');
        $(".change2").addClass('colorchange2');
    });

});

$(document).ready(function () {
    $(".change").click(function () {
        $('.yearChange').hide().css('transform', 'rotateY(90deg)');
        $(".monthChange").show();
        setTimeout(function () {
            $(".monthChange").css('transform', 'rotateY(0deg)');
            a++;
        }, 150);
        $(".change").removeClass('colorchange');
        $(".change2").removeClass('colorchange2');
    });
});

// priyank start

$(function() {
  $('#colorselector').change(function(){
    $('.tabcontent_product').hide();
    $('#' + $(this).val()).show();
  });
});

$('.slick_product').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                
            }
        }]
});

function openCity(evt, cityName) {
    var ii, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent_product");
    for (ii = 0; ii < tabcontent.length; ii++) {
        tabcontent[ii].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (ii = 0; ii < tablinks.length; ii++) {
        tablinks[ii].className = tablinks[ii].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openMobile(evt, mobileName) {
    $('.sec4 img').hide();
    $('#'+mobileName).show();
    $('.sec4 img').parents('.sec4').removeClass('sec4a');
    $('#'+mobileName).parents('.sec4').addClass('sec4a');
    $('.product_sec4_p_inner').removeClass('active');
    evt.currentTarget.className += " active";
}

// height
var cHeight =1;
$('.product_sec4_p_inner').each(function(){
   var hegiht = $(this).innerHeight() ;
   
   if(cHeight < hegiht){
       cHeight = hegiht;
   }
});

$('.product_sec4_p_inner').css('min-height', cHeight);

// wow
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

// priyank end

$("#btn3").click(function () {
    $("#btn3 span").html($("#btn3 span").html() == 'VALIDATE' ? 'REMOVE' : 'VALIDATE');
    $("#test3").val(($("#test3").val() =='Coupon Accepted: 20% discount') ?'':'Coupon Accepted: 20% discount').css("color", "#e57b93");
});

$(document).ready(function () {
    $(".change").click(function () {
        $('.yearChange').hide().css('transform', 'rotateY(90deg)');
        $(".monthChange").show();
        setTimeout(function () {
            $(".monthChange").css('transform', 'rotateY(0deg)');
            a++;
        }, 150);
        $(".change").removeClass('colorchange');
        $(".change2").removeClass('colorchange2');
    });
});
var sectionTop = $('.question_content').offset().top;
var boxHeight = $('.question_content').height();
$(window).scroll(function () {
    if ($(window).scrollTop() > sectionTop + boxHeight - 250) {
        $('.navigation').removeClass('fixed');
        $('.navigation').addClass('fixed1');
    }
    else if ($(window).scrollTop() >= sectionTop) {
        $('.navigation').addClass('fixed');
        $('.navigation').removeClass('fixed1');
    }
    else {
        $('.navigation').removeClass('fixed');
        $('.navigation').removeClass('fixed1');
    }
});

var sectionTop = $('.question_content').offset().top;
var boxHeight = $('.question_content').height();
$(window).scroll(function () {
    if ($(window).scrollTop() > sectionTop + boxHeight - 250) {
        $('.navigation').removeClass('fixed');
        $('.navigation').addClass('fixed1');
    }
    else if ($(window).scrollTop() >= sectionTop) {
        $('.navigation').addClass('fixed');
        $('.navigation').removeClass('fixed1');
    }
    else {
        $('.navigation').removeClass('fixed');
        $('.navigation').removeClass('fixed1');
    }
});

