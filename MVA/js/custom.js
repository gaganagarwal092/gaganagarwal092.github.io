$('.funnel_inner_1').hide();
$('#step1').show();
$('.nextme').click(function () {
    var id = $(this).data('id');
    $('.funnel_inner_1').hide();
    $('#step' + id).fadeIn();
});
$('.prevme').click(function () {
    var id = $(this).data('id');
    $('.funnel_inner_1').hide();
    $('#step' + id).fadeIn();
});

var $cb = $("input[type=checkbox]");
if (!$cb.attr("checked")) {
    $("input[type=checkbox]").removeClass("");
}
$('.nextme').click(function (e) { //#A_ID is an example. Use the id of your Anchor
    $('html, body').animate({
        scrollTop: $('.funnelmain').offset().top - 112 //#DIV_ID is an example. Use the id of your destination on the page
    }, 'slow');
});
$('.prevme').click(function (e) { //#A_ID is an example. Use the id of your Anchor
    $('html, body').animate({
        scrollTop: $('.funnelmain').offset().top - 112 //#DIV_ID is an example. Use the id of your destination on the page
    }, 'slow');
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
        $('#mySidenav').css('left', '-250px');
    }
});




