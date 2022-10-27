'use strict';
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');
const menuHamIcon = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});    

menuHamIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
});


