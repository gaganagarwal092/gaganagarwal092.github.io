// $(window).scroll(function() {
//     var serElm = $(this).css('height','100vh');
//     if(serElm) {
//         $('.upsellcheck').css({
//             'display':'block',
//             'bottom': '0px',
//             'transition':'all 3s ease'
//         });
//         // alert('dd');
//     }
//     else{
//         $(this).css('height','initial');
//         $('.upsellcheck').css('display','none');
//     }
// });

    // $(window).scroll(function(){
    //     if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight){
    //             alert('end reached');
    //     }
    // });
  


$(document).ready(function() {
  $(".accordion-title").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next(".acc_content").slideUp(200);
    } else {
      $(".accordion-title").removeClass("active");
      $(this).addClass("active");
      $(".acc_content").slideUp(200);
      $(this).next(".acc_content").slideDown(200);
    }
  });
});

$('.closebtn').click(function(){
    $(this).parent('.acc_content').slideUp(400);
});
// $(window).resize(function(){
//     if($(this).width()<=767){
//         $('.anchor a img').css('display','inline-block');
//         $('.anchor a span').text('Add to basket');
//     }
//     else{
//         $('.anchor a img').css('display','none');
//         $('.anchor a span').text('Design Now');   
//     }
// })

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
        $('#mySidenav').css('left', '-250px');
    }
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
$('.hamburger_rm').click(function(){
    $('.hamburger2').addClass('is-active');
})
$('.hamburger2').click(function(){
    $('.hamburger_rm').removeClass('is-active');
    $('.sidenav').css('left','-250px');
})


// $(window).scroll(function() {
//     if($(this).scrollTop => 200) {
//         // $('.upsellcheck').slideUp();
//         alert('dd');
//     }
// });


// $(window).scroll(function() {
//     var elmHeight = $(this).height();
//     console.log(elmHeight);
// });

