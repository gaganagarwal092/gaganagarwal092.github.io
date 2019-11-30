$(document).ready(function () {
    $('.content').richText();
});

//10-6-19

$('.slctAll input').click(function () {
    var elmChck = $('.slctAll input[type=checkbox]:checked').val();
    if (elmChck) {
        $('.allSlct input').prop("checked", true);
    } else {
        $('.allSlct input').prop('checked', false);
    }
});

$('.allSlct input').click(function () {
    var chldChck = $(".allSlct input:checkbox:not(:checked)");
    if (chldChck) {
        $('.slctAll input').prop("checked", false);
    }
});

$(document).ready(function () {
    $('.loadCntnt:hidden').slice(0, 1).show();
    $('.notif_data:hidden').slice(0, 3).show();
    $('.load_btn').click(function () {
        $('.loadCntnt:hidden').slice(0, 2).slideDown();
        $('.notif_data:hidden').slice(0, 1).slideDown();
        if ($('.loadCntnt:hidden').length === 0) {
            $('.load_btn1').fadeOut();
            $('.load_btn3').fadeOut();
        }

        if ($('.notif_data:hidden').length === 0) {
            $('.load_btn2').fadeOut();
        }
    });
});


$('.FileExport a').click(function (e) {
    $('.FileExport ul').slideToggle();
    e.stopPropagation();
});

$('.FileExport ul li').click(function () {
    $('.FileExport ul').slideUp();
});

$(document).on("click", function (event) {
    var $trigger = $(".FileExport a");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".FileExport ul").slideUp("fast");
    }

});


/*----------------------------------**-------------*/

$("#clkimg").click(function () {
    $("#vditm")[0].src += "?autoplay=1";
    $('#clkimg').fadeOut();
});

$('.dropbox').click(function () {
    if ($(this).hasClass('active')) {
        $('.dropmenu').slideUp();
        $('.dropbox').removeClass('active');
        $('.rotate').removeClass('rotatearrow');
    } else {
        $('.dropmenu').slideUp();
        $('.dropbox').removeClass('active');
        $('.rotate').removeClass('rotatearrow');
        $(this).addClass('active');
        $(this).next('.dropmenu').slideDown();
        $(this).children().find('.rotate').addClass('rotatearrow');
    }
});


$('.notfication').click(function () {
    $('.notifybox').slideToggle();
});
$('.admintabs ul li a').click(function () {
    $('.admintabs ul li a').removeClass('active');
    $(this).addClass('active');
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
        $('#adminmenu').css('left', '0px');
    } else {
        $('#adminmenu').css('left', '-250px');
    }
});

$('.hamburger').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-250px');
    }
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
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
                    };
                });
            }
        }
    });


/*------------------------*/

$('.rightBx_inr button').click(function () {
    $('.rightBx_inr button').parents('.rightBx_inr').children('button').find('img').removeClass('rotate');
    $(this).parents('.rightBx_inr').children('button').find('img').addClass('rotate');
    if ($(this).hasClass('active')) {
        $('.lang_wrp').slideUp();
        $('.rightBx_inr button').removeClass('active');
    } else {
        $('.lang_wrp').slideUp();
        $('.rightBx_inr button').removeClass('active');
        $(this).addClass('active');
        $(this).next('.lang_wrp').slideDown();
    }

});


$('.rightBx_inr ul li').click(function () {
    var txt = $(this).text();
    $(this).parents('.rightBx_inr').children('button').find('span').text(txt);
    $(this).parents('.lang_wrp').slideUp();
    $(this).parents('.lang_wrp').prev('button').find('img').removeClass('rotate');
    $(this).parent('.lang_wrp').prev('button').removeClass('active');
    //    $('.lang_wrp').slideUp();
});

$('.right_box2 input').click(function () {
    var elmChk = $(this).is(':checked');
    if (elmChk) {
        $('.right_box2 label').css('color', '#666');
        $(this).siblings('label').css('color', '#456ffd');
    }
});

$(document).on("click", function (event) {
    var $trigger = $(".rightBx_inr button");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".lang_wrp").slideUp("fast");
    }

    $(".rightBx_inr button").removeClass('active');
    $('.rightBx_inr button img').removeClass('rotate');
});

$(".rightBx_inr button").click(function (e) {
    e.stopPropagation();
});


/*---file uploader---*/

var Upload = {

    // Handle events it the box
    init: function () {
        var upload = $("#filedrag");
        upload.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
                e.preventDefault();
                e.stopPropagation();
            })
            .on('drop', function (e) {
                files = e.originalEvent.dataTransfer.files;
                Upload.submit(files);
            });

        upload.on('change', 'input', function (e) {
            Upload.submit(this.files);
        });
    },

    // Check the uploaded file
    submit: function (files) {

        // Check file extension and size
        var file = files[0];
        var type = file['type'].substr(0, file['type'].indexOf('/'));
        if (type != 'image') {
            alert('This file type is not supported. Only images should be uploaded');
            return;
        }
        if (file['size'] > 10485760) {
            alert('This file is too heavy, it weights more than 10M');
            return;
        }
        Upload.display(file);
    },

    // Display an uploaded file
    display: function (file) {
        var img = document.getElementById("imgCnt");
        var reader = new FileReader();
        reader.onloadend = function () {
            img.src = reader.result;
        }
        reader.readAsDataURL(file);
        // $(this).parents('.uploadText').hide();
        // $('.appimagemain .Uploadimg img').css({'width':'100%','height':'auto'});
    },
}

$(document).ready(function () {
    Upload.init();
});


//chart

/*-------------chart---*/

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['W18', 'W19', 'W20', 'W21', 'W22', 'W23', 'W18', 'W19', 'W20', 'W21', 'W22', 'W23'],
        datasets: [{

            data: [3, 4, 4.5, 4, 2, 3, 4, 4, 3, 3, 2, 3],
            backgroundColor: [
                        'rgba(220, 232, 255,0.8)',
                        'rgba(220, 232, 255,0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
            borderColor: [
                        'rgba(106, 158, 253, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
            borderWidth: 4
                }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,

                }
                    }]
        },
        elements: {
            point: {
                radius: 0
            }
        },
        legend: {
            display: false
        }
    }

});

//chart 2

var ctx = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['W18', 'W19', 'W20', 'W21', 'W22', 'W23', 'W18', 'W19', 'W20', 'W21', 'W22', 'W23'],
        datasets: [{

            data: [3, 4, 4.5, 4, 2, 3, 4, 4, 3, 3, 2, 3],
            backgroundColor: [
                        'rgba(220, 232, 255,0.8)',
                        'rgba(220, 232, 255,0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
            borderColor: [
                        'rgba(106, 158, 253, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
            borderWidth: 4
                }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,

                }
                    }]
        },
        elements: {
            point: {
                radius: 0
            }
        },
        legend: {
            display: false
        }
    }

});


