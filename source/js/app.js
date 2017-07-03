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