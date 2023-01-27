//Menú responsive.

const navbar = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modalNavbar__background');
const closeNavbar = document.querySelector('.modalNavbar__close-icon');

modalNavbar.style.display = "none";

navbar.addEventListener('click', ()=>{
    modalNavbar.style.display = "block";
});

closeNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = "none";
})



