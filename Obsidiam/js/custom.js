$('.sidenav a').hover(function(){
    $(".sidenav").css({"width":"250px"});
    $(".header_main").css({"padding-left":"250px"});
    $(".dashboardmain").css({"padding-left":"250px"});
    $(".sidenav a span").css({"width":"110px"});
    $(".sidenav .logo img.showimg").css({"display":"block","margin-left":"65px"});
    $(".sidenav .logo img.hideimg").css({"display":"none"});
},function(){
    $(".sidenav").css({"width":"76px"});
    $(".header_main").css({"padding-left":"76px"});
    $(".dashboardmain").css({"padding-left":"76px"});
    $(".sidenav a span").css({"width":"0px"});
    $(".sidenav .logo img.showimg").css({"display":"none"});
    $(".sidenav .logo img.hideimg").css({"display":"block","margin-left":"21px"});
})

$('.taskNewList tr').click(function(e){
    if($(window).width() >= 768) {
    $('.taskNewBox').css({"width":"50%"});
        $('.form_sdbox').css({"right":"0%"});
        $('.taskNewList td').addClass('dec_width');
    }
});
// $('body,html').click(function(e){
//    if($(window).width() >= 768) {
//     $('.taskNewBox').css({"width":"100%"})
//         $('.form_sdbox').css({"right":"-100%"});
//         $('.taskNewList td').removeClass('dec_width');
//     }
// });
// $('.taskNewBox').click(function(e){
//     e.stopPropagation();
// });

$('.typeA').hide();
$('.typesa').show();
$('.clickme').click(function () {
    var type = $(this).data('type');
    $('.typeA').fadeOut();
    $('.types' + type).fadeIn();
    $('.clickme').removeClass('active');
    $(this).addClass('active');

});

$('.notficationopen').click(function () {
    $('.notification_panel').slideToggle();
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
        $('#mySidenav2').css('left', '0px');
    }
    else {
        $('#mySidenav2').css('left', '-180px');
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
$(document).ready(function(){
    $('.digitbox input').keyup(function(){
        if($(this).val().length==$(this).attr("maxlength")){
            $(this).parent('.form-group').next('.form-group').children('input').focus();
        }
    });
});
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left',
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  },);
});
$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD-MMMM') + ' - ' + picker.endDate.format('DD-MMMM'));
});

$('.TL_inner tr').click(function(){
    var elmTxt = $(this).children('td').find('span').attr("class");
    if(elmTxt == 'dispute') {
       window.open('dispute.html', '_self');
    }
});
$('.TL_inner tr').click(function(){
    var elmTxt = $(this).children('td').find('span').attr("class");
    if(elmTxt == 'Verification') {
       window.open('verification.html', '_self');
    }
});

// $('.upload_btn a').click(function(){

// });

$(".movesA").hide();
$(".movesa").show();
$(".chart span").click(function() {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".chart span").removeClass("active");
    $(this).addClass("active");
});

$('.tooltip1').click(function() {
//    $('.tooltip1').find('.tooltiptext').css("visibility","hidden");
    $(this).find('.tooltiptext').css("visibility","visible");
    
});

$('.taskNewList tr').click(function() {
    $('.taskNewList tr').removeClass('active');
    $(this).addClass('active')

});

$('.upload_outer').click(function() {
    $('.upload_outer').removeClass('active');
    $(this).addClass('active');
});

$('.upload_outer').click(function() {
   $('.check_list input').prop("checked", false); 
});

$('.tooltip1').hover(function() {
    $('.tooltip1').find('.tooltiptext').css("visibility","hidden");
    $(this).find('.tooltiptext').css("visibility","visible");
    
});

