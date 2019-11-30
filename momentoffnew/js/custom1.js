$(".editp").click(function () {
    $(this).toggleClass("activecol");
});
$(".messageFlash").click(function () {
    $(".social_comment").addClass("social_commentflash ");
});
$(document).on('click', '.guestrightDdrop', function () {
    if ($(this).hasClass('active')) {
        $('.guestrightDdrop').removeClass('active');
        $('.guestrightDdropopen').slideUp();
    }
    else {
        $('.guestrightDdropopen').slideUp();
        $('.guestrightDdrop').removeClass('active');
        $(this).next().slideDown();
        $(this).addClass('active');
    }

});

// 
// // event page start
//Dropdown plugin data end
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
         create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
             and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
         and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
     except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
 then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

$('.eventscalender a').click(function () {
    $(".eventscalender a").css("color", "#696b84");
    ($(this).css("color", "#e57b93"));
    $('.datep').datetimepicker({
        format: 'DD/MM/YYYY',
//        inline: true,
        sideBySide: true

    });
});
$('.collapsed').click(function () {
    var id = $(this).data('id');
    $('#' + id).slideToggle();
});

// event input
$('.eventattachment #FileAttachment').change(function () {
    $('.eventattachment #eventfileuploadurl').val($(this).val());
    $('.eventattachment #eventfileuploadurl').css("color", "#e57b93");
    $('.eventattachment #imgchange').attr("src", "img/paperclip2.svg");
    $('.eventattachment #anchorshow').show();
});
$('.eventattachment .delete2').click(function () {
    $('.eventattachment #eventfileuploadurl').val("Add Floorplant");
    $('.eventattachment #eventfileuploadurl').css("color", "#696b84");
    $('.eventattachment #imgchange').attr("src", "img/paperclip.svg");
    $('.eventattachment #anchorshow').hide();
});
// event input

$(document).on('click', '.addaccmoclick', function () {
    $('.appendhereaccmo').append('<div class="hotelreview boxs"><div class="accomowidth width1 accomopadright"><div class="form-group"><input type="email" class="form-control" id="email"></div></div><div class="accomowidth width2 accomopadleft"><div class="form-group"><input type="email" class="form-control" id="email"></div></div><a href="javascript:void(0)" class="deletechoice"><img src="img/reg_delete.svg" alt="reg_delete" class="img-responsive center-block"></a></div>');
});
$(document).on('click', '.deletechoice', function () {
    $(this).parent().remove();
    choice--;
});

// event page end


// $(document).ready(function (){
//     $('.calllistmain .calllist .tasks label').click(function () {
//         if ($(this).prev('input').is(":checked")){
//             $('.calllist1').detach();
//             $('.calllist1').appendTo('.card card-body');
//         }
//     });
// });
$(document).ready(function () {
//    $('.step5btn').click(function () {
//        $('.step5').css("display", "none");
//        $('.step6').css("display", "block");
//    });
//    $('.step6btn').click(function () {
//        $('.step6').css("display", "none");
//        $('.step5').css("display", "block");
//    });
    /*--priyank startt--*/
    $('.fornext1feedback').click(function () {
        $('.myModal_guest1').css("display", "none");
        $('.myModal_guest2').css("display", "block");
    });
    $('.fornext1feedback2').click(function () {
        $('.myModal_guest2').css("display", "none");
        $('.myModal_guest3').css("display", "block");
    });

    $('.fornext1feedback3').click(function () {
        $('.myModal_guest2').css("display", "none");
        $('.myModal_guest1').css("display", "none");
        $('.myModal_guest3').css("display", "block");
    });
//     $('.fornext1feedbackD1').click(function () {
//        $('.myModal_guest1').css("display", "none");
//        $('.myModal_guest2').css("display", "block");
//        $('.myModal_guest3').css("display", "none");
//    });
//    $('.fornext1feedbackD2').click(function () {
//        $('.myModal_guest1').css("display", "none");
//        $('.myModal_guest2').css("display", "none");
//        $('.myModal_guest3').css("display", "block");
//    });

    $('.footer_prevs3').click(function () {
        $('.myModal_guest3').css("display", "none");
        $('.myModal_guest1').css("display", "none");
        $('.myModal_guest2').css("display", "block");
    });
    $('.footer_prevs2').click(function () {
        $('.myModal_guest3').css("display", "none");
        $('.myModal_guest2').css("display", "none");
        $('.myModal_guest1').css("display", "block");
    });
    /*--priyank end--*/
});
$(".tasks label").click(function () {
    if ($(this).prev('input').is(":checked")) {
        $(this).next('.dot').removeClass("dot2");
    } else {
        $(this).next('.dot').addClass("dot2");
    }
});
/*divya srat*/
$(".guestlistaddedmessage").hide();
$(".importbtn").click(function () {
    $("#myModal_guest").hide();
    $("#myModal_guest").removeClass("in");
    $(".guestlistaddedmessage").show();
});
$(".ADDGuestDelete").click(function () {
    $("#ADDGUEST").hide();
    $("#ADDGUEST").removeClass("in");
    $(".guestlistaddedmessage1").show();
});
$(".CrossD").click(function () {
    $(".guestlistaddedmessage").hide();
});
$(".addgroupD a").click(function () {
    $(".guestdropdown").slideUp();
    $(".GuestModal").modal('show');
});

$(".ADDGUEST").click(function () {
    $(".guestdropdown").slideUp();
    $('#myModal4').modal('show');
});
$(".FinishPopup").click(function () {
    $(".Forclosemodal").modal('hide');
});

$(document).click(function () {
    $(".guestdropdown").hide();
});
$('.trigger1').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown1').toggle();
});
$('.trigger2').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown2').toggle();
});
$('.trigger3').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown3').toggle();
});
$('.trigger4').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown4').toggle();
});
$('.trigger5').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown5').toggle();
});
$('.trigger6').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown6').toggle();
});
$('.trigger7').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown7').toggle();
});
$('.trigger8').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown8').toggle();
});
$('.trigger9').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown9').toggle();
});
$('.trigger10').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown10').toggle();
});
$('.trigger11').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown11').toggle();
});
$('.trigger12').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown12').toggle();
});
$('.trigger13').click(function (event) {
    event.stopPropagation();
    $('.guestdropdown13').toggle();
});
function refreshPage() {
    window.location.reload();
}
$('.typeA').hide();
$('.typesa').show();
$('.clickme').click(function () {
    var type = $(this).data('type');
    $('.typeA').fadeOut();
    $('.types' + type).fadeIn();
    $('.clickme').removeClass('active');
    $(this).addClass('active');

});
/*divya end*/
/*gagn start*/
function setCountry(code) {
    if (code || code == '') {
        var text = jQuery('a[cunt_code="' + code + '"]').html();
        $(".dropdown dt a span").html(text);
    }
}
$(document).ready(function () {
    $(".dropdown img.flag").addClass("flagvisibility");

    $(".dropdown dt a").click(function () {
        $(".dropdown dd ul").toggle();
    });

    $(".dropdown dd ul li a").click(function () {
        //console.log($(this).html())
        var text = $(this).html();
        $(".dropdown dt a span").html(text);
        $(".dropdown dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("country-select"));
    });

    function getSelectedValue(id) {
        //console.log(id,$("#" + id).find("dt a span.value").html())
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown"))
            $(".dropdown dd ul").hide();
    });


    $("#flagSwitcher").click(function () {
        $(".dropdown img.flag").toggleClass("flagvisibility");
    });
});
// dropdown2 start
function setCountry(code) {
    if (code || code == '') {
        var text = jQuery('a[cunt_code="' + code + '"]').html();
        $(".dropdown2 dt a span").html(text);
    }
}
$(document).ready(function () {
    $(".dropdown2 img.flag").addClass("flagvisibility");

    $(".dropdown2 dt a").click(function () {
        $(".dropdown2 dd ul").toggle();
    });

    $(".dropdown2 dd ul li a").click(function () {
        //console.log($(this).html())
        var text = $(this).html();
        var type = $(this).data('type');
        if (type == "no") {
            $(".myDropdown2 a.resend").css('color', '#e57b93');
            $(".myDropdown2 dl").css('background-color', '#f0f1f4');
        }
        else {
            $(".myDropdown2 a.resend").css('color', '#696b84');
            $(".myDropdown2 dl").css('background-color', '#daeaf4');
        }
        $(".dropdown2 dt a span").html(text);
        $(".dropdown2 dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("dropdownoptions"));
    });

    function getSelectedValue(id) {
        //console.log(id,$("#" + id).find("dt a span.value").html())
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown2"))
            $(".dropdown2 dd ul").hide();
    });


    $("#flagSwitcher").click(function () {
        $(".dropdown2 img.flag").toggleClass("flagvisibility");
    });
});

// dropdown2 end

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
        $('#mySidenav').css('left', '0');
    }
    else {
        $('#mySidenav').css('left', '-280px');
    }
});

$('.slick').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }]
});
//gagn other custom
$('.regmodalslick').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
            }
        }]
});


$('.notification_bar .cross a').click(function () {
    $(this).parents('.notification_bar').slideUp();
    $('.header').css('top', '0');
    if ($(window).width() <= 991) {
        $('.sidenav').css('top', '72px');
    }
    else if ($(window).width() <= 767) {
        $('.sidenav').css('top', '58px');
    }
    else {
        $('.sidenav').css('top', '0');
    }
    $('.dashboard_outer').removeClass('height');
});

function myMap() {
    var mapProp = {
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).on('click', '.feedbackadminsave', function () {

    $(this).parents('.feedbackItemJ').children('.width3').children('.noleft').children('.feedbacktextareawidth ').children('.textareafeedback').css('border', 'none').css('padding', '0').css('background', 'transparent').attr('readonly', 'readonly');
    $(this).remove();
});

$(document).on('click', '.addLine', function () {
    $('.appendHere').append('<div class="boxs border items feedbackItem feedbackItemJ"><div class="width width1"><img src="img/permi_person.svg" alt="permi_circle"></div><div class="width width2"><p class="text">Administrator</p></div><div class="width width3"><div class="col-xs-7 noleft"><div class="feedbacktextareawidth boxs"><textarea class="form-control text2 textareafeedback" placeholder="enter mail id"></textarea></div></div><div class="col-xs-3 noleft"><div class="boxs feedbackadminanchor"><a href="javascript:void(0)" class="feedbackadminsave">save</a></div></div></div><a href="javascript:void(0)" class="delete deletewidth" contenteditable="false"><img src="img/delete.svg" alt="delete"></a></div>');
});
$(document).on('click', '.addcompanionlink', function () {
    $('.appendHere1').append('<div class="InputBoxs InputBoxsJ boxs"> <div class="col-xs-6 width414"><input type="text" class="form-control"> </div> <div class="col-xs-6 width414"> <select class="form-control"><option value="Wedding Role1">Wedding Role1</option><option value="Wedding Role2">Wedding Role2</option> </select></div><a href="javascript:void(0)" class="delete deletewidth" contenteditable="false"><img src="img/delete.svg" alt="delete"></a></div>');
});
//radio
$(document).on('click', '.addchoiceseclink', function () {
    $('.appendherechoice').append('<div class="radiobtns radio radio-primary"><input checked="checked" id="small_input_pp" name="small_input" type="radio"> <label for="small_input_pp"> </label><input type="text" class="inputchoice" placeholder=""></div>');
});
$(document).on('click', '.EditD', function () {
    // $('.appendHere').append('<div class="boxs border items"><div class="width width1"><img src="img/permi_circle.svg" alt="permi_circle"></div><div class="width width2"><p contenteditable="true">Administrator</p></div><div class="width width3"><p contenteditable="true">davidjburgos@gmail.com</p></div><a href="javascript:void(0)" class="delete deletewidth" contenteditable="false"><img src="img/delete.svg" alt="delete"></a></div>');
    $(".pagelist .width2 p,.pagelist .width3 p").attr("contenteditable", "true");
});
$(document).on('click', '.EditD', function () {
    // $('.appendHere').append('<div class="boxs border items"><div class="width width1"><img src="img/permi_circle.svg" alt="permi_circle"></div><div class="width width2"><p contenteditable="true">Administrator</p></div><div class="width width3"><p contenteditable="true">davidjburgos@gmail.com</p></div><a href="javascript:void(0)" class="delete deletewidth" contenteditable="false"><img src="img/delete.svg" alt="delete"></a></div>');
    $(".Budgettableboxbottom .colbottom").attr("contenteditable", "true");
});
//gagn other custom
$(document).on('click', '.editp', function () {
    $(".regstoreModal .modal-header p span").attr("contenteditable", "true");
    $('.regstoreModal .modal-header p span').focus();
});
$(document).on('click', '.regstoreModal .modal-body', function () {
    $(".regstoreModal .modal-header p span").attr("contenteditable", "false");
});
$('.disablebtn').click(function () {
    $(this).children('.addregdetail_box').toggle();
});
$(document).on('click', '.choiceanchor', function () {

    $('.finalchoice').attr('disabled', 'disabled');
    $(this).remove();
});


var choice = 3;
$(document).on('click', '.addLine', function () {
    $('.choicebox_inner').append('<div class="tasks boxs"><input type="checkbox" id="choice' + choice + '" value="second_checkbox" class="check"> <label for="choice' + choice + '"><span></span></label><input type="text" class="form-control finalchoice" placeholder="Choice ' + choice + '"><a href="javascript:void(0)" class="choiceanchor">save</a><a href="javascript:void(0)" class="deletechoice"><img src="img/cross_msg.svg" alt="delete"></a></div>');
    choice++;
});
$(document).on('click', '.deletechoice', function () {
    $(this).parent().remove();
    choice--;
});
/*--priyank custom message start--*/
$(document).on('click', '.message_right_dropbtn', function () {
    if ($(this).hasClass('active')) {
        $('.message_right_dropbtn').removeClass('active');
        $('.message_right_dropdown-content').slideUp();
    }
    else {
        $('.message_right_dropdown-content').slideUp();
        $('.message_right_dropbtn').removeClass('active');
        $(this).next().slideDown();
        $(this).addClass('active');
    }

});
/*--priyank custom message end--*/

// modal start
$(document).ready(function () {
    $('.step1btn').click(function () {
        $('.step1').css("display", "none");
        $('.step2').css("display", "block");
    });
    $('.step2btn').click(function () {
        $('.step2').css("display", "none");
        $('.step3').css("display", "block");
    });
    $('.step3btn').click(function () {
        $('.step3').css("display", "none");
        $('.step4').css("display", "block");
    });
    $('.step4btn').click(function () {
        $('.step4').css("display", "none");
        $('.step1').css("display", "block");
    });
});

$(document).ready(function () {
    $(".change2").click(function () {
        $("#apps1").css('display', 'none');
        $("#apps2").css('display', 'block');
        $(".change1").addClass('colorchange');
        $(".change2").addClass('colorchange2');
        $('.slick')[0].slick.refresh()

    });
});
$(document).ready(function () {
    $(".change1").click(function () {
        $("#apps1").css('display', 'block');
        $("#apps2").css('display', 'none');
        $(".change1").removeClass('colorchange');
        $(".change2").removeClass('colorchange2');
    });
});
// setting page
$(document).ready(function () {
    $(".switch1").click(function () {
        $("#set2").css('display', 'none');
        $("#set3").css('display', 'none');
        $("#set1").css('display', 'block');
        $('.settings .settingsbtns a').removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function () {
    $(".switch2").click(function () {
        $("#set3").css('display', 'none');
        $("#set1").css('display', 'none');
        $("#set2").css('display', 'block');
        $('.settings .settingsbtns a').removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function () {
    $(".switch3").click(function () {
        $("#set2").css('display', 'none');
        $("#set1").css('display', 'none');
        $("#set3").css('display', 'block');
        $('.settings .settingsbtns a').removeClass('active');
        $(this).addClass('active');
    });
});
// setting page
$(".profilesetting form .input-group .form-control").focus(function () {
    $(".profilesetting form .input-group").css('border-color', '#dddde1');
    $(this).parent(".profilesetting form .input-group").css('border-color', '#e57b93');
});


// $(document).ready(function () {
//     var Setinner = 0
//     $(".switch3").click(function () {
//         $("Setinner"+Setinner+).hide();
//         $(this).show();
//         $('.settings .settingsbtns a').removeClass('active');
//         $(this).addClass('active');
//         Setinner++;
//     });
// });


$('.stepsliders').hide();
$('#steps1').show();
$('.nextme').click(function () {
    var id = $(this).data('id');
    $('.stepsliders').hide();
    $('#steps' + id).fadeIn();
    $('.fixBottom  ul li a').removeClass('active');
    $('#f' + id).addClass('active');

});


$(document).on('click', '.delete', function () {
    var type = $(this).data('type');
    if (type == 'thisis') {
        $(this).parents('.feedbackpagelist').hide();
    }
    else {
        $(this).parent().remove();
    }
});



$(document).on('click', '.addLine', function () {
    $('.appendHere2').append('<div class="pagelist boxs"><div class="width width1"><img src="img/list3.svg" alt="list3" class="img-responsive"></div><div class="width width2"><p contenteditable="true" >Title here untill there is no more space…</p></div><div class="width width3"><p contenteditable="true" id="demo" class="collapse in">Description goes here until there is no more spa…</p></div><a href="#demo" data-toggle="collapse"><img src="img/close.svg" alt="close" class="img-responsive"></a><a href="#demo" data-toggle="collapse"><img src="img/open.svg" alt="open" class="img-responsive"></a><a href="javascript:void(0)" class="delete"><img src="img/edit.svg" alt="edit" class="img-responsive"></a><a href="javascript:void(0)" class="delete"><img src="img/delete.svg" alt="delete" class="img-responsive"></a></div>');
});


//$(document).ready(function () {
////    $('.step5btn').click(function () {
////        $('.step5').css("display", "none");
////        $('.step6').css("display", "block");
////    });
////    $('.step6btn').click(function () {
////        $('.step6').css("display", "none");
////        $('.step5').css("display", "block");
////    });
//    /*--priyank startt--*/
//    $('.next_popupbuttn').click(function () {
//        $('.myModal_guest1').css("display", "none");
//        $('.myModal_guest2').css("display", "block");
//    });
//    $('.next_popupbuttn2').click(function () {
//        $('.myModal_guest2').css("display", "none");
//        $('.myModal_guest3').css("display", "block");
//    });
//
//    $('.next_popupbuttn3').click(function () {
//        $('.myModal_guest2').css("display", "none");
//        $('.myModal_guest1').css("display", "none");
//        $('.myModal_guest3').css("display", "block");
//    });
//
//    $('.footer_prevs3').click(function () {
//        $('.myModal_guest3').css("display", "none");
//        $('.myModal_guest1').css("display", "none");
//        $('.myModal_guest2').css("display", "block");
//    });
//    $('.footer_prevs2').click(function () {
//        $('.myModal_guest3').css("display", "none");
//        $('.myModal_guest2').css("display", "none");
//        $('.myModal_guest1').css("display", "block");
//    });
//    /*--priyank end--*/
//});
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip1"]').tooltip({trigger: "hover"});
    $('[data-toggle="tooltip2"]').tooltip({trigger: "hover"});
});

if ($(window).width() < 1199) {
    $('.bottomtooltip').attr("data-placement", "bottom");
}
if ($(window).width() < 560) {
    $('.bottomtooltip2').attr("data-placement", "top");
}
$("#menu").tooltip("disable");

//$(document).ready( function(){
//    $('#menu').tooltip({disabled: true});
//});

$('.datep').datetimepicker({
    format: 'DD/MM/YYYY',
//    inline: true,
    sideBySide: true

});
$('.timep').datetimepicker({
    format: 'h:m:a',
//    inline: true,
    sideBySide: true

});
$(".schedulebtn").click(function () {
    var a = $(".datep").val();
    $(".Schedulebox a span").html(a);
    $(".Schedulebox a span").css("color", "#262a49");
    $(".Schedulebox a img").attr("src", "img/ms_clock_change.svg");
});


$('.slickrefresh').click(function () {
    $('.slick')[0].slick.refresh();
});
$('.openmodal').click(function () {
    $('.regmodalslick')[0].slick.refresh();
});

// select all input social page
$("#socialtick1").click(function () {
    $(".checkBoxClass").prop('checked', $(this).prop('checked'));
});
// select all input social page




$('.gallerybtn').click(function () {
    var c = $(this).data('type');
    $('.gallerybtn').removeClass('active');
    $(this).addClass('active');
    if (c == "all") {
        $('.column').show();
    }
    else {
        $('.column').hide();
        $('.' + c).fadeIn();
    }
});
$('.gallerybtn2').click(function () {
    var c = $(this).data('type');
    $('.gallerybtn2').removeClass('active');
    $(this).addClass('active');
    if (c == "alltab") {
        $('.columnmodal').show();
    }
    else {
        $('.columnmodal').hide();
        $('.' + c).fadeIn();
    }
});
$('.typeAA').hide();
$('#typesaa').show();
$('.leave_cmnt').click(function () {
    var type = $(this).data('type');
    $('.typeAA').slideUp();
    $('#types' + type).slideDown(1500);
    $(this).parents().parents().next('.lv_cmnt_box').slideDown();
    $(this).next('.leave_cmnt_hide').show();
});
$('.cmnt_close').click(function () {
    $(this).closest('.lv_cmnt_box').slideUp();
    $('.leave_cmnt_hide').hide();
});

$('.add_commentbtns a').click(function () {
    $(this).toggleClass('active');
});

$('.chat_open').click(function () {
    $('.chat2').fadeIn(500);
    $('.chat1').hide();
});
$('.chat_close').click(function () {
    $('.chat1').fadeIn(500);
    $('.chat2').hide();
});



$('#File').change(function () {
    $('#fileupload').value = this.value;
    $('#fileupload').css("color", "#e57b93");
    $('#imgchangefile').attr("src", "img/paperclip2.svg");
    $('#filecross').show();
});
$('.filedelete').click(function () {
    $('#fileupload').value = "";
    $('#fileupload').css("color", "#696b84");
    $('#imgchangefile').attr("src", "img/paperclip.svg");
    $('#filecross').hide();
});

$('#Photo').change(function () {
    $('#photoupload').value = this.value;
    $('#photoupload').css("color", "#e57b93");
    $('#imgchangephoto').attr("src", "img/camera_msg2.svg");
    $('#photocross').show();
});
$('.photodelete').click(function () {
    $('#photoupload').value = "";
    $('#photoupload').css("color", "#696b84");
    $('#imgchangephoto').attr("src", "img/camera_msg.svg");
    $('#photocross').hide();
});

//gagan other custom

// input
$('#FileAttachment').change(function () {
    $('#fileuploadurl').val($(this).val());
    $('#fileuploadurl').css("color", "#e57b93");
    $('#imgchange').attr("src", "img/paperclip2.svg");
    $('#anchorshow').show();
});
$('.delete2').click(function () {
    $('#fileuploadurl').val("Insert Image (Optional)");
    $('#fileuploadurl').css("color", "#696b84");
    $('#imgchange').attr("src", "img/paperclip.svg");
    $('#anchorshow').hide();
});
// input

// input1 message
$('#FileAttachmentfile').change(function () {
    $('#fileuploadurlfile').val($(this).val());
    $('#fileuploadurlfile').css("color", "#e57b93");
    $('#imgchangefile').attr("src", "img/paperclip2.svg");
    $('#anchorshowfile').show();
});
$('.deletefile').click(function () {
    $('#fileuploadurlfile').val("Add a file");
    $('#fileuploadurlfile').css("color", "#696b84");
    $('#imgchangefile').attr("src", "img/paperclip.svg");
    $('#anchorshowfile').hide();
});
// input1 message

// input2 message
$('#FileAttachmentphoto').change(function () {
    $('#fileuploadurlphoto').val($(this).val());
    $('#fileuploadurlphoto').css("color", "#e57b93");
    $('#imgchangephoto').attr("src", "img/camera_msg2.svg");
    $('#anchorshowphoto').show();
});
$('.deletephoto').click(function () {
    $('#fileuploadurlphoto').val("Add photos");
    $('#fileuploadurlphoto').css("color", "#696b84");
    $('#imgchangephoto').attr("src", "img/camera_msg.svg");
    $('#anchorshowphoto').hide();
});
// input2 message

// input3 message
$('#FileAttachmentfilepolls').change(function () {
    $('#fileuploadurlfilepolls').val($(this).val());
    $('#fileuploadurlfilepolls').css("color", "#e57b93");
    $('#imgchangefilepolls').attr("src", "img/paperclip2.svg");
    $('#anchorshowfilepolls').show();
});
$('.deletefilepolls').click(function () {
    $('#fileuploadurlfilepolls').val("Add a file");
    $('#fileuploadurlfilepolls').css("color", "#696b84");
    $('#imgchangefilepolls').attr("src", "img/paperclip.svg");
    $('#anchorshowfilepolls').hide();
});
// input3 message

// input4 message
$('#FileAttachmentphotopolls').change(function () {
    $('#fileuploadurlphotopolls').val($(this).val());
    $('#fileuploadurlphotopolls').css("color", "#e57b93");
    $('#imgchangephotopolls').attr("src", "img/camera_msg2.svg");
    $('#anchorshowphotopolls').show();
});
$('.deletefilepolls').click(function () {
    $('#fileuploadurlphotopolls').val("Add photos");
    $('#fileuploadurlphotopolls').css("color", "#696b84");
    $('#imgchangephotopolls').attr("src", "img/camera_msg.svg");
    $('#anchorshowphotopolls').hide();
});
// input4 message

// ckecklist and budget input
$('#ckecklist').change(function () {
    $('#ckecklisturl').val($(this).val());
    $('#ckecklisturl').css("color", "#e57b93");
    $('#ckecklist_imgchange').attr("src", "img/paperclip2.svg");
    $('#ckecklist_anchorshow').show();
});
$('.ckecklistdelete').click(function () {
    $('#ckecklisturl').val("Insert Attachment (Optional)");
    $('#ckecklisturl').css("color", "#696b84");
    $('#ckecklist_imgchange').attr("src", "img/paperclip.svg");
    $('#ckecklist_anchorshow').hide();
});
// ckecklist and budget input



//Dropdown plugin data start
//Code Starts
var ddData = [
    {
        text: "English",
        value: 1,
        imageSrc: "img/setting_lang.svg"
    },
    {
        text: "Russian",
        value: 2,
        imageSrc: "img/setting_lang.svg"
    },
    {
        text: "American",
        value: 3,
        imageSrc: "img/setting_lang.svg"
    }
];
//Code Ends
//Code Starts
$('#myDropdown').ddslick({
    data: ddData,
    width: 319,
    imagePosition: "left",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});
//Code Ends


var iframe = $('#vimeo-player')[0];
var player = $f(iframe);

$('#stop').click(function () {
    player.api('pause');
});

$('#play').click(function () {
    player.api('play');
    $(this).remove();
});


var iframe1 = $('#vimeo-player1')[0];
var player1 = $f(iframe1);

$('#stop').click(function () {
    player1.api('pause');
});

$('#play1').click(function () {
    player1.api('play');
    $(this).remove();
});

//fancy box
$("#youtube_link").fancybox({
    'width': '75%',
    'height': '75%',
    'autoScale': true,
    'transitionIn': 'none',
    'transitionOut': 'none',
    'type': 'iframe'
});
/* Apply fancybox to multiple items */