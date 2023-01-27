


//dibujo de carrito.
const drawCart = () =>{
    modalCarts.innerHTML = "";
    modalCarts.style.display = 'block';
    let cartHeader = document.createElement("div");
    cartHeader.className = "cart__header";
    cartHeader.innerHTML = `
        <h1 class="cart__title">Tú compra</h1>
        <img class="cart__icon-close"  src="../img/icon-close.svg" alt=""> 
    `;
    document.getElementById("cart").append(cartHeader);
    const closeButton = document.querySelector('.cart__icon-close');
    closeButton.addEventListener("click", ()=>{
        modalCarts.style.display = "none";
    });
               
    cart.forEach(prod => {
        let cartBody = document.createElement("div");
        cartBody.className = "cart__body";
        cartBody.innerHTML = `
            <div class="cart__body__cont-name">
                <h3 class="cart__body-name">${prod.title}</h3>
            </div>
            <div class="cart__body__cont">
                <div class="cart__body__cont-img">
                    <img class="cart__body-img" src="${prod.image}">
                </div>
                <div class= "cart__body__cont-cant">
                    <p>cant.: ${prod.cantidad}</p>
                </div>
                <div class="cart__body__cont-price">
                    <p>$${prod.price * prod.cantidad}</p>
                </div>
                <div class="cart__body__cont-icon">
                    <img class="cart__icon-delete" src="../img/icon-delete.svg" alt="Eliminar">
                </div>
            </div>
            `;
        document.getElementById("cart").append(cartBody);
        const deleteButton = document.querySelector('.cart__icon-delete');
        deleteButton.addEventListener("click", deleteCart);
        });
    
        //Agrego el precio mediante un reduce, ya que solo necesito el precio del arrays del cart.
        const subtotal = cart.reduce((acc, el) => acc + el.price, 0); //hago que el acumulador arranque de 0 y se sumen los precios
        //let total = subtotal.toFixed(2); //redondeo los centavos en 2 cifras significativas.
        let totalSection = document.createElement("div");
        totalSection.className = "cart__footer";
        totalSection.innerHTML = `
        <p class="cart__footer-text">TOTAL: $ ${subtotal}</p>
        <div class = "cart__footer-cont">
            <button class = "cart__footer-clear">Vaciar carrito</button>
            <button class = "cart__footer-buy">Comprar</button>
        </div>
        
        `;
        
        document.getElementById("cart").append(totalSection);
        const clearButton = document.querySelector(".cart__footer-clear");
        clearButton.addEventListener("click", clearCart);
        const buyButton = document.querySelector(".cart__footer-buy");
        buyButton.addEventListener("click", buyCart);
};

// //variable para ver el carrito
readCart.addEventListener("click", drawCart);

//función para borrar productos del carrito.
const deleteCart = () =>{
    const id = cart.find((element) => element.id);
    cart = cart.filter((cartId) =>{
        return cartId !== id;
    });
    lS();
    drawCart();
};


//función para vaciar el carrito por completo.
const clearCart = () =>{
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${cart.reduce((acc, prod) => acc + prod.cantidad, 0)} products.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            cart.length = 0;
            lS();
            drawCart();
        }
      })
}

//función para confirmar compra
const buyCart = () => {
    Swal.fire({
        title: '¡Compra confirmada!',
        text: 'Muchas gracias por elegirnos.',
        icon: 'success',
    });
    cart.length = 0;
    lS();
    drawCart();
}
        


