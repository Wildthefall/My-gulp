'use strict';

var loginBtn = document.querySelector('.login-btn'),
    autorCard = document.querySelector('.autor-card');

window.onload = function() {
    loginBtn.addEventListener('click', function () {
        autorCard.classList.add('flip');
        loginBtn.classList.add('login-btn--clicked')
    });
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            autorCard.classList.remove("flip");
            loginBtn.classList.remove('login-btn--clicked');
        }
    })
};

$(document).ready(function() {

    var layer = $('.parallax').find('.parallax__layer');

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
});