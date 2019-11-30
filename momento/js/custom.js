function refreshPage() {
    window.location.reload();
}

$('.slick').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }]
});
$('.slick2').slick({
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }]
});
$('.slick3').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
});

$('.slick4').slick({
    dots: false,
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

$(function () {
    $('.setactive3 ').hide();
    $('.targetsDiv5.active2').show();
    $('.showSingle').mouseover(function () {
        $('.targetDiv').hide();
        $('#div' + $(this).attr('target')).show();
    });
    $('.showSingle1').mouseover(function () {
        $('.targetsettoDiv1').hide();
        $('#div' + $(this).attr('targetsetto')).show();
    });
    $('.showSingle3').mouseover(function () {
        $('.showSingle3').removeClass('active');
        $(this).addClass('active');
        $('.targetsDiv4').hide();
        $('#div' + $(this).attr('targets')).show();
    });
    $('.showSingle4').mouseover(function () {
        $('.setactive3').hide();
        $('.showSingle4').children('a').removeClass('active2');
        $(this).children('a').addClass('active2');
        $('#div' + $(this).attr('targets')).show();
    });
});

$(function () {
    $('.showSingle4').mouseout(function () {
        //$('.targetsDiv5.active2').show();
    });
    $('.showSingle').mouseout(function () {
        $('.targetDiv').hide();
        $('#div2').show();
    });
    $('.showSingle1').mouseout(function () {
        $('.targetsettoDiv1').hide();
        $('#div5').show();
    });
    $('.showSingle4').mouseout(function () {
        //  $('.targetsDiv5').hide();
        //$('#div11').show();
    });
});
$(function () {
    $('.setactive2 ').hide();
    $('.targetsDiv4.active2').show();
    $('.showSingle').mouseover(function () {
        $('.targetDiv').hide();
        $('#div' + $(this).attr('target')).show();
    });
    $('.showSingle1').mouseover(function () {
        $('.targetsettoDiv1').hide();
        $('#div' + $(this).attr('targetsetto')).show();
    });

    $('.showSingle4').mouseover(function () {
        $('.setactive3').hide();
        $('.showSingle4').children('a').removeClass('active2');
        $(this).children('a').addClass('active2');
        $('#div' + $(this).attr('targets')).show();
    });
});

$('ul.nav li.dropdown').hover(function () {
    $('#myDropdown').stop(true, true).delay(200).slideDown();
}, function () {
    $('#myDropdown').stop(true, true).delay(200).slideUp(200);
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
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

if ($(window).width() < 992) {
    $('.before').insertBefore('.after');
}
;




jQuery(function () {
    jQuery('.showSingle').click(function () {
        jQuery('.targetDiv').hide();
        jQuery('#div' + $(this).attr('target')).show();
    });
});


$(document).ready(function () {
    $(".change2").click(function () {
        $("#apps1").css('display', 'none');
        $("#apps2").css('display', 'block');
        $(".change").addClass('colorchange');
        $(".change2").addClass('colorchange2');
    });
});
$(document).ready(function () {
    $(".change").click(function () {
        $("#apps1").css('display', 'block');
        $("#apps2").css('display', 'none');
        $(".change").removeClass('colorchange');
        $(".change2").removeClass('colorchange2');
    });
});

$(".demo .demo_inner a").click(function () {
    $(".demo .demo_inner a").removeClass('activeanchor');
    $(this).addClass('activeanchor');
});


/* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
;


$(document).ready(function () {
    $('.navigation a[href*=#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior
        $(document).off("scroll");
        var target = $(this).attr("href"); // Set the target as variable


        $('navigation a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
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


$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
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

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Get the modal
var modal = document.getElementById('package');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Get the modal
var modal = document.getElementById('package');

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
$('.myBtn4').click(function () {
    $('#myModal').modal('show');
    $('#package').modal('hide');
});

$(".play").click(function () {
    $('#myModal').modal('hide');
    $('#package').modal('show');
});

$(".center-block").click(function () {
    $('#package').modal('hide');
});
$(".close").click(function () {
    $('#myModal').modal('hide');
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

$("#myBtn").click(function () {
    $('body').css('overflow', 'hidden');
});