const navbarMenu = document.querySelector('.navbar__menu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',() => {
    navbarMenu.classList.toggle('show');
});