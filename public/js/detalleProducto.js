window.onload = function () {

    let comprar = document.getElementById('Comprar');
    let image = document.getElementById('product_image_large').src;
    let name = document.querySelector('.nombre-producto').innerHTML;
    let price = document.querySelector('.precio-producto').innerHTML;

    let arrayProducts = [];
    let itemsCarrito;
    let productoAAgregar = {};

    comprar.addEventListener('click',function(e){

        let qty = document.getElementById('quantity_input').value;

        productoAAgregar = {
            name: name,
            price: price,
            qty: qty,
            image: image
        }

        itemsCarrito =  JSON.parse(localStorage.getItem("carrito"));

        if (itemsCarrito){
            arrayProducts = itemsCarrito;
        }

        arrayProducts.push(productoAAgregar);
        localStorage.setItem("carrito", JSON.stringify(arrayProducts));
        console.log(arrayProducts)
        window.alert("Se agrego el producto al carrito");
        
    })
}