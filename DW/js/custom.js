$(".movesA").hide();
$(".movesa").show();
$(".app_left a").click(function () {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".app_left a").removeClass("active");
    $(this).addClass("active");
});

$(window).resize(function () {
    changeDiv();
});

changeDiv();
function changeDiv() {
    if ($(window).width() <= 767) {
        $('.before').insertBefore($('.after'));
    }
    else {
        $('.before').insertBefore($('.myContent'));
    }
    
}

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

// var hamburgers = document.querySelectorAll(".hamburger");
// if (hamburgers.length > 0) {
//     forEach(hamburgers, function (hamburger) {
//         hamburger.addEventListener("click", function () {
//             this.classList.toggle("is-active");
//         }, false);
//     });
// }

// $('.hamburger').click(function () {

//     if ($(this).hasClass('is-active')) {
//         $('#mySidenav').css('left', '0px');
//     }
//     else {
//         $('#mySidenav').css('left', '-250px');
//     }
// });

// $('.tab').click(function () {
//     if ($(this).hasClass('active')) {
//         $('.tab').find('span').removeClass('color');
//         $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
//         $('.tab').removeClass('active');
//         $('.tabs').slideUp();
//     }
//     else {
//         var id = $(this).data('id');

//         $('.tab').find('span').removeClass('color');
//         $(this).find('span').addClass('color');
//         $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
//         $(this).find('.fa').addClass('fa-chevron-up').removeClass('fa-chevron-down');
//         $('.tab').removeClass('active');
//         $(this).addClass('active');
//         $('.tabs').slideUp();
//         $('#tab' + id).slideDown();
//     }
// });





$(window).load(function(){        
  setTimeout(function() {
    $('#pop_frm').modal('show');

  },10000);
}); 

$('.btnul ul li:nth-child(1)').click(function() {
    $('html,body').animate({
        scrollTop:$('.discount_section').offset().top
    },500)
});
$('.btnul ul li:nth-child(2)').click(function() {
    $('html,body').animate({
        scrollTop:$('.lucky_section').offset().top - 80
    },500)
});
$('.btnul ul li:nth-child(3)').click(function() {
    $('html,body').animate({
        scrollTop:$('.service_home').offset().top - 100
    },500)
});

    