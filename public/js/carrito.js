window.onload = function () {

    let arrayProducts =  JSON.parse(localStorage.getItem("carrito"));
    let tabla = document.getElementById('tbody');
    let vaciarCarrito = document.getElementById('boton-vaciar');
    let precioTotal = document.getElementById('total');

    let total = 0;

    if (arrayProducts){

        for (let i = 0; i < arrayProducts.length; i++) {
            tabla.insertRow(-1).innerHTML =
            '<td><img id="imagen" src = ' + arrayProducts[i].image +' ></img></td><td>' + arrayProducts[i].qty + '</td><td id="precio-unitario">' + arrayProducts[i].price + '</td><td id="precio-total">' + arrayProducts[i].price * arrayProducts[i].qty + '</td></tr>';
            total = total + (parseInt(arrayProducts[i].price,10) * arrayProducts[i].qty);
            
        }

        precioTotal.innerHTML = "$ " + total;
    }


    vaciarCarrito.addEventListener('click', function(e){
        let rowCount = arrayProducts.length;
        for (let i= 0; i<rowCount; i++){
            tabla.deleteRow(-1);
        }
        localStorage.clear();
        total = 0;
        precioTotal.innerHTML = "$ " + total;

    })
}