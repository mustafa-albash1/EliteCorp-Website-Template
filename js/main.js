$(function () {
    'use strict';
// slider Heigh
    var winH = $(window).height(),
        upper = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upper + navH));
});

// Featured work Shuffle
$('.featured-work ul li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
        $('.shuffle-imgs .col-md').css('opacity', 1);
    } else {
        $('.shuffle-imgs .col-md').css('opacity', 0.5);
        $($(this).data('class')).parent().css('opacity', 1);

    }
});
