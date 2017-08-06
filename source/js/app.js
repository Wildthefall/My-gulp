'use strict';



var loginBtn = document.querySelector('.login-btn');
var authorCard = document.querySelector('.author-card');

window.onload = function() {
    loginBtn.addEventListener('click', function () {
        authorCard.classList.add('flip');
        loginBtn.classList.add('login-btn--clicked')
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            authorCard.classList.remove("flip");
            loginBtn.classList.remove('login-btn--clicked');
        }
    })
};

$(window).scroll(function () {
    var graphs = $('.graphs');
    var graphCircle = $('.graph__circle');
    var skillsTitle = $('.skills__title');
    var skillsOffset = $('.skills').offset().top - 200;

    if (window.pageYOffset > skillsOffset) {
        graphs.addClass('animated fadeInRightBig');
        graphCircle.addClass('animation');
        skillsTitle.addClass('animated fadeInLeftBig');
    }
});

$(document).ready(function() {

    var layer = $('.parallax').find('.parallax__layer');
    var menu = document.querySelector('.menu');

    $(window).on('mousemove', function(event) {
        var mouseX = event.pageX,
            mouseY = event.pageY,
            width = (window.innerWidth / 2) - mouseX,
            height = (window.innerHeight / 2) - mouseY;

        layer.map(function(key, value) {
            var widthPosition = width * (key / 150),
                heightPosition = height * (key / 150);

            $(value).css({
                'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)'
            })
        })
    })

    $('.toggle').on('click', function() {
        $('.toggle').toggleClass('toggle--active');
        menu.classList.toggle('menu--active');
    })
});