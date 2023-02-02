//Menú responsive.

const navbar = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modalNavbar__background');
const closeNavbar = document.querySelector('.modalNavbar__close-icon');

modalNavbar.style.display = "none";

navbar.addEventListener('click', () => {
    modalNavbar.style.display = "block";
});

closeNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = "none";
})

//Dark mode.
const btnMode = document.getElementById('mode');
let infoMode = document.querySelector('.header__mode-info');
let main = document.querySelector('.main-container');

btnMode.addEventListener('click', () => {
    let descrip = infoMode.innerText;
    if (descrip == "Ligth"){
        infoMode.innerHTML = `<p class=".header__mode-info">Dark</p>`;
        main.classList.add('dark');
        main.classList.add('active');
    }else{
        infoMode.innerHTML = `<p class=".header__mode-info">Ligth</p>`;
        main.classList.remove('dark');
        main.classList.remove('active');     
    };
    modeLS();
});



//Local storage.
//función para poder agregarlo al localStorage       
const modeLS = () =>{
    if(main.classList.contains('dark')){
        localStorage.setItem("darkMode", 'true');
    }else{
        localStorage.setItem("darkMode", 'false');
    };  
};

//función para que muestre el localStorage
const dataOfmodeLS = (key) =>{
    
};
const def = dataOfLS("darkMode");

