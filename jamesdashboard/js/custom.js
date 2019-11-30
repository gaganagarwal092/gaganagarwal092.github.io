$(".dropdown dt a").on('click', function () {
    $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function () {
    $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown"))
        $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on('click', function () {

    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

    if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.multiSel').append(html);
        $(".hida").hide();
    } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.dropdown dt a').append(ret);

    }
});


////Dropdown plugin data start
//Code Starts
var ddData = [
    // {   text: "Name",
    //     value: 1,
    //     imageSrc: "img/arrowdown.svg"
    // },
    {
        text: "House & Mortgage",
        value: 2,
        imageSrc: "img/dropdownhouse.svg"
    },
    {
        text: "Car",
        value: 3,
        imageSrc: "img/dropdowncar.svg"
    },
    {
        text: "Media",
        value: 4,
        imageSrc: "img/dropdownflash.svg"
    }
];
//Code Ends
//Code Starts
$('#accountdropdown').ddslick({
    data: ddData,
    width: 213,
    imagePosition: "left",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});
//Code Ends
//Dropdown plugin data end

$('.set').hide();
$('.sets1').show();
$('.clickme').click(function () {
    var type = $(this).data('type');
    $('.set').fadeOut();
    $('.sets' + type).fadeIn();
    $('.clickme').removeClass('active');
    $(this).addClass('active');

});

$(".transaction_form input").focus(function () {
    $(".transaction_form input").parent(".transaction_form").css('border-color', '#e1e3e6');
    $(this).parent(".transaction_form").css('border-color', '#1ad996');
});
// $(".transaction_form .niece_select").focus(function () {
//     $(".transaction_form .niece_select").parents(".transaction_form").css('border-color', '#e1e3e6');
//     $(this).parents(".transaction_form").css('border-color', '#1ad996');
// });


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
// window.onclick = function () {closeBtn(event)}
    
//     function closeBtn(event) {
//       var model = document.getElementById("mySidenav");
//      // var Sidenav = document.getElementById("mySidenav");
//       if(event.target == model) {
     

//         model.style.display = 'none';
//       }
//     }

    $('body').click(function(evt){    
       if(evt.target.id == "mySidenav")
          if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0%');
        }
        else {
            $('#mySidenav').css('left', '-100%');
            $('.hamburger').removeClass("is-active");
        }
       //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
       if($(evt.target).closest('#mySidenav').length)
          return;             

      //Do processing of click event here for every element except with id menu_content
});
$('.datep').datetimepicker({
    format: 'DD/MM/YYYY',
    // inline: true
})
    
    
var showdetails = document.querySelectorAll(".show2");
if (showdetails.length > 0) {
    forEach(showdetails, function (showall) {
        showall.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.show1').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#transaction-s').css('right', '0');
    }
    else {
        $('#transaction-s').css('right', '-100%');
    }
});
$('.show3').click(function () {
    $(".show2").removeClass('is-active');
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









$(".close").click(function () {
    $("#transaction").hide();
});

