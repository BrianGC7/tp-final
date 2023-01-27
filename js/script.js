//CONSTANTS
const readCart = document.getElementById("readCart"); //Al clickear el icono del carrito para verlo.
const modalCarts = document.getElementById("cart");
const buttonsCategory = document.querySelectorAll(".cards__mainButton")
let buttonsAdd = document.querySelectorAll(".cards__description__button");
const countCart = document.querySelector(".header__cart--notification");







//array of cart.
let cart = [];


//FUNCTIONS TO CART
//Paint a cards to DOM.
const drawCards = (products) => {
    document.getElementById("product").innerHTML = ""; //devuelve el array vacío, para ejecutarse con el filter.
    const cards = products.reduce(( acc, prod) => {
        return acc + `
        <div class="cards__cont">
            <div class="cards__img">
                <img class="cards__img-edit" src=${prod.image} alt=${prod.title}>
            </div>
            <div class="cards__description">
                <h4 class="cards__description__title">${prod.title}</h4>
                <p class="cards__description__price-discount">$${prod.price}</p>
            </div>
            <button class="cards__description__button" id= ${prod.id}>
                <img class="cards__description__button-icon" src="../img/icon-cart-white.svg" alt="icon">Añadir al carrito
            </button>
        </div>
        `
    },"");
    document.getElementById("product").innerHTML = cards;

    buttonAct();
}


//Filtros produtos.
buttonsCategory.forEach(boton =>{
    boton.addEventListener("click", (e) =>{
        
        //buttonsCategory.forEach(boton => boton.classList.remove("active"));
        //e.currentTarget.classList.add("active");
        //Uso currentTarget porque toma todo lo del botón, no solo una parte como target.
        if(e.currentTarget.id != "all"){
            const productsButton = products.filter(prod => prod.category === e.currentTarget.id);
            drawCards(productsButton);
        }else{
            drawCards(products);
        };
        
    });
})

//actualiza los botones cuando se usa el filter
function buttonAct(){
    buttonsAdd = document.querySelectorAll(".cards__description__button");
    buttonsAdd.forEach(boton => {
        boton.addEventListener("click",addToCart);
    })
};

function addToCart(e){
    Toastify({
        text: "Agregado con éxito",
        duration: 2000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00ff1f, #00ff1f)",
          textTransform: "uppercase",
          fontSize: "12px"
        },
        offset: {
            x: '1.5em', 
            y: '2rem'
          },
        onClick: function(){}
      }).showToast();

    buttonID = e.currentTarget.id
    const prodAdd = products.find(prod => prod.id == buttonID); //== es igual, no estrictamente igual (string)
    
    if(cart.some(prod => prod.id == buttonID)){
        const count = cart.findIndex(prod => prod.id == buttonID);
        cart[count].cantidad++; //sumo la cantidad
    }else{
        prodAdd.cantidad = 1;
        cart.push(prodAdd);
    }
    actCount();
    lS();
    //localStorage.setItem("cart").JSON.stringify(cart);
}


//contador del carrito
function actCount(){
    let number = cart.reduce((acc,prod) => acc + prod.cantidad,0);
    countCart.innerText = number;
}



//función para poder agregarlo al localStorage       
const lS = () =>{
    localStorage.setItem("cart", JSON.stringify(cart));
}

//función para que muestre el localStorage
const dataOfLS = (key) =>{
    return JSON.parse(localStorage.getItem(key));
}
const cartupdated = dataOfLS("cart") || [];
cart = cartupdated;




