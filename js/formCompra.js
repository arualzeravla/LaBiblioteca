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



//TOMO EL CARRITO DEL LOCAL STORAGE Y LO INSERTO EN EL HTML

let localCarrito = localStorage.getItem("carrito");
let carrito = JSON.parse(localCarrito);


function actualizarPrecio() {
    let precio = 0;
    for (producto of carrito) {
        precio = precio + producto.precio;

        precioFinal = precio.toFixed(2);
        
        let totalDiv = document.getElementById("div_sumaPrecio");
        totalDiv.innerHTML = ` $ ${precioFinal} `;
    }
};


function renderizarCarrito() {
    for (item of carrito) {
        let carritoUl = document.getElementById("ul_carrito");
        let precioFormatted = item.precio.toFixed(2);
        carritoUl.innerHTML += `<li class="li_itemCarrito"> 
                                <div class="div_tituloCarrito">${item.titulo}</div>
                                <div class="div_precioCarrito"> $ ${precioFormatted}</div>
                                <div class="div_trashIcon"> <i class="fa-solid fa-trash-can"></i> </div>
                            </li>`  
                        };
    actualizarPrecio();

};

renderizarCarrito();




//BORRO ITEM DEL LOCAL STORAGE Y DEL HTML AL HACER CLICK EN EL ICONO DE BORRAR

//ATRAPO TODOS LOS LI DEL HTML QUE REPRESENTA EL CARRITO Y LE AGREGO UN EVENT LISTENER A CADA UNO DE SUS ICONOS DE BORRAR:
let itemsCarrito = document.querySelectorAll("li.li_itemCarrito");

for (item of itemsCarrito) {
    let trashIcon = item.children[2];
    trashIcon.addEventListener("click", () => {
        //ATRAPO EL DIV COMPLETO DE LA LINEA A BORRAR:
        let itemDiv = trashIcon.parentNode;

        //GENERO UN ARRAY DE LOS TITULOS DEL CARRITO QUE ESTA EN EL LS Y PIDO EL INDEX QUE TENGA EL TITULO IGUAL AL DIV QUE ESTOY BORRANDO. LUEGO LO ELIMINO DEL ARRAY CARRITO:
        let index = carrito.map(producto => producto.titulo).indexOf(itemDiv.children[0].innerHTML.toString());
        carrito.splice(index, 1);

        //ATRAPO EL NUEVO CARRITO Y LO ENVÍO AL LS:
        let nuevoCarrito = JSON.stringify(carrito);
        localStorage.setItem("carrito", nuevoCarrito);

        //BORRO EL DIV DEL HTML:
        itemDiv.innerHTML = "";

        actualizarPrecio();


    })
};


//VALIDO FORMULARIO DE COMPRA

let formulario = document.getElementById("formCompra");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    if (!e.target.children[0].value || !e.target.children[1].value || !e.target.children[2].value || !e.target.children[3].value) {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Debes ingresar todos los datos solicitados";
        document.body.append(mensaje);
    } else {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Tu compra ha sido registrada. Recibirás el pedido de 3 a 5 días hábiiles.";
        document.body.append(mensaje);
    }
};