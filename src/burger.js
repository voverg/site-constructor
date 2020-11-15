const body = document.querySelector('body');
const burgerMenu = document.querySelector('.burger-menu');
const openCloseBurgerBtn = burgerMenu.querySelector('.burger-menu__button');
const overlay = burgerMenu.querySelector('.burger-menu__overlay');

function toggleMenu() {
    burgerMenu.classList.toggle('burger-menu_active');
    body.classList.toggle('hidden');
}

// Burger menu
openCloseBurgerBtn.addEventListener('click', event => {
    event.preventDefault();
    toggleMenu();
    
});

overlay.addEventListener('click', toggleMenu);

// burgerNav.addEventListener('click', event => {
//     const link = event.target;
//     if (link.classList.contains('burger-menu__link')) {
//         // smoothScroll(event, link);
//         toggleMenu();
//     }
// })


// Show fixed nav
// window.addEventListener('scroll', function() {
//     if(window.pageYOffset > 200){
//         mainNav.classList.add('main-nav__fixed');
//     } else{
//         mainNav.classList.remove('main-nav__fixed');
//     }
// })


// function smoothScroll(event, link) {
//     event.preventDefault();
//     const href = link.getAttribute('href');
//     document.querySelector('' + href).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     }) 
// }

// ---------------------- Event listeners
// Main nav
// mainNav.addEventListener('click', event => {
//     link = event.target;
//     if (link.classList.contains('main-nav__link') || link.classList.contains('logo__link')) {
//         smoothScroll(event, link);
//     }
// })