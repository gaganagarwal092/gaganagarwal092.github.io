$('.advance').click(function () {
    //    e.preventDefault();
    $button = $(this);
    if ($button.hasClass('foll')) {
        $button.removeClass('foll');
        $button.addClass('subs');
    } else {
        $button.removeClass('subs');
        $button.addClass('foll');
    }
});
// $('a.status1').click(function () {
//     //    e.preventDefault();
//     $button = $(this);
//     if ($button.hasClass('follow1')) {
//         $button.removeClass('follow1');
//         $button.addClass('followed1');
//         $button.text('Followed');
//     } else {
//         $button.removeClass('followed1');
//         $button.addClass('follow1');
//         $button.text('Follow');
//     }
// });
$(window).resize(function () {
    forHeight();
});
forHeight();
function forHeight() {
    var height = $(document).height();
    $('.footerlivementor').css('top', (height - $('.footerlivementor').innerHeight()) + "px");
}

$('#memberview').click(function() {
    var elmInpt = $('.toggleswitch input[type="checkbox"]:checked ').val();
    if(elmInpt) {
       setTimeout(function() {
        window.open('myprofile.html','_self');
    },500);
    }
    else{
        window.open('profileedit.html','_self');
    }
})
$('#mentorview').click(function() {
    var elmInpt = $('.toggleswitch input[type="checkbox"]:checked ').val();
    if(elmInpt) {
      setTimeout(function() {
         window.open('profileedit.html','_self');
     },500);
    }
    else{
        window.open('myprofile.html','_self');
    }
})

// changes
$("#reset_password").click(function () {
    $("#email_down").fadeIn();

});
$(".forgot").click(function () {
    $("#email_down").hide();

});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$('#imageUpload').change(function() {
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview2').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview2').hide();
            $('#imagePreview2').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$('#imageUpload2').change(function() {
    readURL(this);
});
// changes

$(".click4").click(function () {
    $("#token").val("400");
    $('#display').text('400');
    $('#price').val('100');
    $('#display2').text('100');
    $(".arrow").css("left", "85%");
    $(".col_inner .custom").removeClass("active");
    $(this).children('.custom').addClass("active");
});
$(".click3").click(function () {
    $("#token").val("200");
    $('#display').text('200');
    $('#price').val('50');
    $('#display2').text('50');
    $(".arrow").css("left", "60%");
    $(".col_inner .custom").removeClass("active");
    $(this).children('.custom').addClass("active");
});
$(".click2").click(function () {
    $("#token").val("100");
    $('#display').text('100');
    $('#price').val('25');
    $('#display2').text('25');
    $(".arrow").css("left", "35%");
    $(".col_inner .custom").removeClass("active");
    $(this).children('.custom').addClass("active");
});
$(".click1").click(function () {
    $("#token").val("");
    $('#display').text('');
    $('#price').val('');
    $('#display2').text('');
    $(".arrow").css("left", "6%");
    $(".col_inner .custom").removeClass("active");
    $(this).children('.custom').addClass("active");
});
$("#token").keyup(function () {
    $("#display").text($(this).val());
});
$("#price").keyup(function () {
    $("#display2").text($(this).val());
});
// function uploadimg() {
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "file");
//     document.body.appendChild(x);
// }
$('a.status').click(function () {
    //    e.preventDefault();
    $button = $(this);
    if ($button.hasClass('follow')) {
        $button.removeClass('follow');
        $button.addClass('followed');
        $button.text('Followed');
    } else {
        $button.removeClass('followed');
        $button.addClass('follow');
        $button.text('Follow');
    }
});
$('a.status1').click(function () {
    //    e.preventDefault();
    $button = $(this);
    if ($button.hasClass('follow1')) {
        $button.removeClass('follow1');
        $button.addClass('followed1');
        $button.text('Followed');
    } else {
        $button.removeClass('followed1');
        $button.addClass('follow1');
        $button.text('Follow');
    }
});
$(".select").click(function () {
    $(".select").removeClass('active');
    $(this).addClass('active');
});
$(function () {
    $(".mentor_row").slice(0, 2).show();
    $("#load").on('click', function (e) {
        e.preventDefault();
        $(".mentor_row:hidden").slice(0, 1).slideDown();
        if ($(".mentor_row:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top - 60
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
        $('.l_header').addClass('l_fixed_header');
        $('#logo_change img').attr({
            "src": "img/logo.svg"
        });
    } else {
        $('.header').removeClass('fixed_header');
        $('.l_header').removeClass('l_fixed_header');
        $('#logo_change img').attr({
            "src": "img/logo_blue.svg"
        });
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

$('.sidenav a').click(function() {
    $('.hamburger').removeClass('is-active');
    $('.sidenav').css('left','-250px');
})

$('body').click(function(evt){    
        if(evt.target.id == "mySidenav")
        if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0%');
    }
    else {
        $('#mySidenav').css('left', '-100%');
        $('.hamburger').removeClass("is-active");
    }
    if($(evt.target).closest('#mySidenav').length)
    return;  
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

/*------------tabs------*/
$(document).ready(function ($) {
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');
    $('.tabs li').click(function (event) {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();

        var selectTab = $(this).find('a').attr("href");

        $(selectTab).fadeIn();
    });
    $('.tabs li a').click(function (e) {
        e.preventDefault();
    });
});

$('#upload_pop').click(function (e) {
    $('.overlay_popup').fadeIn();
    e.preventDefault();

});


//upload Image

var isUpload;
var filebtn = $('#filePhoto');

function readURL(filebtn) {
    for (var i = 0; i < filebtn.files.length; i++) {
        if (filebtn.files[i]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var img = $('.uploader img.upload-img');
                img.attr('src', e.target.result);
            }
            reader.readAsDataURL(filebtn.files[i]);
        }
    }
}
$("#upload-btn, #filePhoto").change(function () {
    readURL(this);
});
if (isUpload) {
    var $form = $('.uploader');
    var droppedFiles = false;
    $form.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    $form.on('dragover dragenter', function () {
            $form.addClass('is-dragover');
        })
        .on('dragleave dragend drop', function () {
            $form.removeClass('is-dragover');
        })
        .on('drop', function (e) {
            droppedFiles = e.originalEvent.dataTransfer.files;
        });

}


/*-----------show password--------------*/
function showPass(e) {
    var x = document.getElementById("passInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    e.preventDefault();
}

/*----------overlay-----*/

//window.onclick = function() {closeOverlay();}
function closeOverlay(event) {
    var modal = document.getElementById('over');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// $("#zoom").click(function () {
//     $("#startup_right").css("display", "none");
//     $("#startup_left").css("width", "100%");
//     $(".startup_bg").css("height", "100vh");
// });
$("#zoom").click(function () {
    $("#startup_right").toggleClass("threatertoggle");
    $("#startup_left").toggleClass("threatertoggle2");
    $(".startup_bg").toggleClass("threatertoggle3");
});
$('.comment').click(function () {

    //    if ($(this).hasClass('is-active')) {
    //        $('#startup_right').css('right', '-300');
    //    } else {
    //        $('#startup_right').css('right', '0px');
    //    }
    $("#startup_right").toggle();
});

//filter

$(document).ready(function () {
    $('.all').hide();
    $('.all').show();
    $('.clickme').click(function () {
        $('.headinghide').hide();
        $('.hiderow').hide();
        var type = $(this).data('type');
        $('.all').hide();
        $('.all' + type).fadeIn();
        $('.clickme').removeClass('active');
        $('.clickme img').css('display','none');
        $(this).children('img').css('display','block');
        $(this).addClass('active');
    });
});
// live page script

$('.smiley_popup').click(function () {
    $('.smiley_div').toggle();
    $('.smiley_div2').hide();
});
$('.streamer2').click(function () {
    $('.smiley_div2').toggle();
    $('.smiley_div').hide();
});
$('.send_token').click(function () {
    $('.streaming2').hide();
    $('.onstreaming').show();
})

// live page script
//
//$('a[href*="#"]')
//        // Remove links that don't actually link to anything
//        .not('[href="#"]')
//        .not('[href="#0"]')
//        .click(function (event) {
//            // On-page links
//            if (
//                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//                    &&
//                    location.hostname == this.hostname
//                    ) {
//                // Figure out element to scroll to
//                var target = $(this.hash);
//                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//                // Does a scroll target exist?
//                if (target.length) {
//                    // Only prevent default if animation is actually gonna happen
//                    event.preventDefault();
//                    $('html, body').animate({
//                        scrollTop: target.offset().top
//                    }, 500, function () {
//                        // Callback after animation
//                        // Must change focus!
//                        var $target = $(target);
//                        $target.focus();
//                        if ($target.is(":focus")) { // Checking if the target was focused
//                            return false;
//                        } else {
//                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                            $target.focus(); // Set focus again
//                        }
//                        ;
//                    });
//                }
//            }
//        });

$('.l_menu>li:nth-child(1), .sidenav .sHome, .fHome, #logo_change').click(function () {
    $('html,body').animate({
        scrollTop: $('#home').offset().top
    });
});

$('.l_menu>li:nth-child(2), .sidenav .sWork').click(function () {
    $('html,body').animate({
        scrollTop: $('#work').offset().top - 100
    });
});

$('.l_menu li:nth-child(3), .sidenav .sAbout').click(function () {
    $('html,body').animate({
        scrollTop: $('#about').offset().top
    });
});

$('.l_menu li a').click(function () {
    $('.l_menu li a').removeClass('active');
    $(this).addClass('active');
});

$('.sideNav a').click(function() {
    $('.sidenavmain').css("left","-100%");
    $('.sideNav').css("left","-250px");

});


$(".upgradetopro").click(function () {
    $(".upgradepro").hide();
    $(".pro").show();
    $(".prohide").show();
});
$(".probox").click(function () {
    $(".pro").hide();
    $(".upgradepro").show();
    $(".prohide").hide();
});