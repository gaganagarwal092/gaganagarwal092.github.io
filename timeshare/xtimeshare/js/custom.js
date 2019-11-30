$('.funnel_slide-1').hide();
$('#step1').show();
$('.nextme').click(function () {
    var id = $(this).data('id');
    $('.funnel_slide-1').hide();
    $('#step' + id).fadeIn();
});
$('.prevme').click(function () {
    var id = $(this).data('id');
    $('.funnel_slide-1').hide();
    $('#step' + id).fadeIn();
});

var $cb = $("input[type=checkbox]");
if (!$cb.attr("checked")) {
    $("input[type=checkbox]").removeClass("");
}
$('.nextme').click(function (e) { //#A_ID is an example. Use the id of your Anchor
    $('html, body').animate({
        scrollTop: $('.main_funnel').offset().top - 120 //#DIV_ID is an example. Use the id of your destination on the page
    }, 'slow');
});
$('.prevme').click(function (e) { //#A_ID is an example. Use the id of your Anchor
    $('html, body').animate({
        scrollTop: $('.main_funnel').offset().top - 120 //#DIV_ID is an example. Use the id of your destination on the page
    }, 'slow');
});




$(window).scroll(function () {
    if ($(window).scrollTop() >= 5) {
        $('.header').addClass('fixed_header');
    }
    else {
        $('.header').removeClass('fixed_header');
    }
});

$('.later_h').click(function() {
    $('.showsection1').show();
    $('.hidesection1').hide();
})

$('.earlier_h').click(function () {
    $('.hidesection1').show();
    $('.showsection1').hide();
    
})

$('.earlier_h2').click(function () {
    $('.hidesection2').hide();
    $('.showsection2').show();
});

$('.later_h2').click(function () {
    $('.hidesection2').show();
    $('.showsection2').hide();
})






