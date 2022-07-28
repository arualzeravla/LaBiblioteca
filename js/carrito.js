let productos = [
    {id: 1, titulo: "Cómo era ser pequeño", precio: 1899, idBoton: "carrito_serPequeno"},
    {id: 2, titulo: "El arte de la guerra", precio: 1499, idBoton: "carrito_guerra"},
    {id: 3, titulo: "Boquita", precio: 2199, idBoton: "carrito_boquita"}
]

let carrito = [];

let botonesCompra = document.querySelectorAll("button.btn");
//console.log(botonesCompra);

botonesCompra.forEach( (btn) => {
    btn.addEventListener('click', function(e) {
    let botonID =  e.target.id;
    //console.log(botonID);
    for(producto of productos){
        //console.log(producto.idBoton);
        if(botonID === producto.idBoton){
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }
    }
    
    })
});



