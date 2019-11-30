window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
    var windowScroll = this.scrollY; 

    var $logo = document.getElementsByClassName('logo')[0];
    $logo.style.transform = 'translateY(' + windowScroll/2 + '%)';

    var $backBird = document.getElementsByClassName('back-bird')[0];
    $backBird.style.transform = 'translateY(' + windowScroll/4 + '%)';

    var $foreBird = document.getElementsByClassName('fore-bird')[0];
    $foreBird.style.transform = 'translateY(-' + windowScroll/100 + '%)';

}