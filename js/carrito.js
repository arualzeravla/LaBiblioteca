//DEFINO PRODUCTOS EN STOCK

let productos = [{
        id: 1,
        titulo: "Cómo era ser pequeño",
        precio: 1899,
        idBoton: "carrito_serPequeno"
    },
    {
        id: 2,
        titulo: "El arte de la guerra",
        precio: 1499,
        idBoton: "carrito_guerra"
    },
    {
        id: 3,
        titulo: "Boquita",
        precio: 2199,
        idBoton: "carrito_boquita"
    }
]

//CREO VARIABLE CARRITO
let carrito;

//VERIFICO EL LOCAL STORAGE. SI YA HAY UN CARRITO, LO ATRAPO -PARSEADO- EN LA VARIABLE carrito. DE LO CONTRARIO, LE ASIGNO A carrito EL VALOR DE UN ARRAY VACÍO.

function verificarCarrito() {
    if (!localStorage.getItem("carrito")) {
        carrito = [];
        console.log("carrito vacío");
    } else {
        let carritoJSON = localStorage.getItem("carrito");
        carrito = JSON.parse(carritoJSON);
    }
};

//AGREGO UN EVENT LISTENER A TODOS LOS BOTONES "AGREGAR A CARRITO". BUSCO CUÁL ES EL PRODUCTO AGREGADO, SE EJECUTA LA FUNCIÓN verificarCarrito() PARA OBTENER EL ARRAY CARRITO QUE HAYA HASTA EL MOMENTO Y SE LE AGREGA EL PRODUCTO. LUEGO SE ENVÍA AL LOCAL STORAGE NUEVAMENTE. 

let botonesCompra = document.querySelectorAll("button.btn");
botonesCompra.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        let botonID = e.target.id;
        for (producto of productos) {
            if (botonID === producto.idBoton) {
                verificarCarrito();
                carrito.push(producto);
                let carritoJ = JSON.stringify(carrito)
                localStorage.setItem("carrito", carritoJ);
            }
        };
    })
});


