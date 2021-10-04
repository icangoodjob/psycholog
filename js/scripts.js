"use strict";

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById("splide-certificates")) {
        new Splide('.splide-certificates', {
            type: 'loop',
        	perPage: 1,
            autoplay: true,
            pagination: false
        }).mount();
    }
    if (document.getElementById("splide-room")) {
        new Splide('.splide-room', {
            type: 'loop',
        	perPage: 1,
            pagination: false
        }).mount();
    }

    const menu = document.getElementById("menu");
    const menuShowBtn = document.getElementById("menu-show");
    const menuCloseBtn = document.getElementById("menu-hide");
    menuShowBtn.addEventListener('click', event => {
        menu.classList.add('active');
        document.body.classList.add('lock');
    });
    menuCloseBtn.addEventListener('click', event => {
        menu.classList.remove('active');
        document.body.classList.remove('lock');
    });
});


// FIXED HEADER
let lastScroll = 0;
const defaultOffset = 110;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
});