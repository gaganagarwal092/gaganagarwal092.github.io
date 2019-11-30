$("#register").click(function () {
    if ($("#signupform").valid()) {
        $.ajax({
            url: "mail",
            type: "POST",
            data: $('#signupform').serialize(),
            success: function (data) {
                $('.msgs').slideDown();
                $("#signupform")[0].reset();
            }
        });
    }
});
//var windowHeight = $(window).height();
//var header = $('.header').outerHeight();
////var coinbtn = $('.height-get-btn').height();
//$('.fullscreen').outerHeight(windowHeight - header);
var galleryFeed = new Instafeed({
    get: 'user',
    userId: '8635632006',
    //    get: 'tagged',
    tagName: 'buildings',
    limit: '6',
    resolution: 'standard_resolution',
    //    accessToken: '8635632006.1677ed0.9c74ba38dbfd4d39a49be5888809be97',
    accessToken: '8635632006.1677ed0.9c74ba38dbfd4d39a49be5888809be97',
    template: '<a href="{{link}}" class="" target="_blank" data-aos="fade-zoom-in"  data-aos-delay="500" data-aos-offset="245" data-aos-easing="ease-in-back"><img src="{{image}}"/></a>',
    target: "instafeed",
    after: function () {
        // disable button if no more results to load
        if (!this.hasNext()) {
            btnInstafeedLoad.setAttribute('disabled', 'disabled');
        }
    },
});
galleryFeed.run();

var btnInstafeedLoad = document.getElementById("load");
btnInstafeedLoad.addEventListener("click", function () {
    galleryFeed.next()
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

$('.hamburger').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-250px');
    }
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();


$('.headerlinks li:nth-child(1), .sidenav a:nth-child(1)').click(function () {
    $('html,body').animate({
        scrollTop: $('#work').offset().top - 70
    }, 1000);
})

$('.headerlinks li:nth-child(2), .sidenav a:nth-child(2)').click(function () {
    $('html,body').animate({
        scrollTop: $('#about_sec').offset().top - 90
    }, 1000);
});

$('.headerlinks li:nth-child(3), .sidenav a:nth-child(3)').click(function () {
    $('html,body').animate({
        scrollTop: $('#service').offset().top - 20
    }, 1000);
});

$('.headerlinks li:nth-child(4), .sidenav a:nth-child(4), .hireusBtn').click(function () {
    $('html,body').animate({
        scrollTop: $('#contact').offset().top - 60
    }, 1000);
});

$('.scrollIcon').click(function () {
    $('html,body').animate({
        scrollTop: $('#toscroll').offset().top
    }, 1000)
});

$('.sidenav a').click(function () {
    $('button.hamburger').removeClass('is-active');
    $('.sidenav').css("left", "-250px");
});

$('.headerlinks a, .sidenav a').click(function () {
    $('.headerlinks a, .sidenav a').removeClass('active_c');
    $(this).addClass('active_c');
});


/*------------**------------*/

var current = $(".believeservice").scrollTop();
var total = $(".believeservice").height() - current;
var ele = $(".circleimg");
var elem = $(".ovel_left");
var currPosition = ele.position().top + 200;
var currPositions = elem.position().top - 100;
var trackLength = 150;
$(window).scroll(function (event) {
    current = $(window).scrollTop();
    var newPosition = trackLength * (current / total)
    ele.css({
        "top": currPosition + (-newPosition) + 'px'
    });

    elem.css({
        "top": currPositions + (-newPosition) + 'px'
    });
});


var current1 = $(".delivery").scrollTop();
var total1 = $(".delivery").height() - current;
//var ele1 = $(".threeimg");
var ele2 = $(".deliver_img");
//var currPosition1 = ele1.position().top + 80;
var currPosition2 = ele2.position().top - 50;
var trackLength = 100;
$(window).scroll(function (event) {
    current1 = $(window).scrollTop();
    var newPosition1 = trackLength * (current1 / total1)
    //    ele1.css({
    //        "top": currPosition1 + (-newPosition1) + 'px'
    //    });

    ele2.css({
        "top": currPosition2 + (-newPosition1) + 'px'
    });
});


//window.addEventListener("scroll", function (event) {
//    var topDistance = this.pageYOffset;
//    var layers = document.querySelectorAll("[data-type='parallax']");
//    for (var i = 0; i < layers.length; i++) {
//        var layer = layers[i];
//        var depth = layer.getAttribute("data-depth");
//        var translate3d = 'translate3d(0, ' + -(topDistance * depth) + 'px, 0)';
//        layer.style['-webkit-transform'] = translate3d;
//        layer.style['-moz-transform'] = translate3d;
//        layer.style['-ms-transform'] = translate3d;
//        layer.style['-o-transform'] = translate3d;
//        layer.style.transform = translate3d;
//    }
//});

$(window).scroll(function () {
//    var elm = $('.delivery').scrollTop();
    var elm = $(window).scrollTop();
//    elm = $(this).scrollTop();
    $(".fullscreen .top h3").css("opacity", 1 - elm / 250);
    $(".fullscreen .top p").css("opacity", 1 - elm / 650);
    $(".fullscreen .socialicon").css("opacity", 1 - elm / 750);
    $(".fullscreen .hireus").css("opacity", 1 - elm / 850);
    $(".fullscreen .scrollIcon").css("opacity", 1 - elm / 750);
});


var fadings = $(".fading");
$(window).scroll(function () {
    var vpheight = document.documentElement.clientHeight;
    fadings.each(function () {
        var r = this.getBoundingClientRect();
        var thisHeight = $(this).height();
        if (thisHeight + r.top < 0 || r.top > vpheight) return true;
        var opacity = Math.max(0, Math.min(1, (r.top >= 0 ? vpheight - r.top : $(this).height() - Math.abs(r.top)) / vpheight));
        $(this).css("opacity", opacity);
    });
});


$('.js_tilt').tilt({
    glare: true,
    maxGlare: .5
});
