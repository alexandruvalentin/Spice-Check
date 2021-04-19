//Declare constants
const menu = document.querySelector('#mobile__menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//  Turn the hamburger menu bars to X when actioned; 
//  credits: https://www.geeksforgeeks.org/how-to-convert-the-hamburger-icon-of-navigation-menu-to-x-on-click/
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Hide the mobile menu upon clicking a menu
const hideMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMenu);
navLogo.addEventListener('click', hideMenu);