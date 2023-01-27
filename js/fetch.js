let products = [];

const dataBase = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    drawCards(data);
    products = data;
    console.log(products);
    
}
dataBase();