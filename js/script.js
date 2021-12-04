function s() {
    $('.preview').addClass('opacity');
}

setTimeout(s, 300);

function img() {
    $('.block-img').addClass('opacity');
}

setTimeout(img, 700);


$(document).ready(function() {




    var $element = $('.platform');
    let counter = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();

        var offset = $element.offset().top

        if (scroll > offset && counter == 0) {
            $('.platform').addClass('opacity');
            counter = 1;
        }



    });


});