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

let precioTotal = 0;
let localCarrito = localStorage.getItem("carrito");
let carrito = JSON.parse(localCarrito);

function renderizarCarrito() {
    for (item of carrito) {
        let carritoUl = document.getElementById("ul_carrito");
        let precioFormatted = item.precio.toFixed(2);
        carritoUl.innerHTML += `<li class="li_itemCarrito"> 
                                <div class="div_tituloCarrito">${item.titulo}</div>
                                <div class="div_precioCarrito"> $ ${precioFormatted}</div>
                                <div class="div_trashIcon"> <i class="fa-solid fa-trash-can"></i> </div>
                            </li>`

        precioTotal = precioTotal + item.precio;
        precioTotalForm = precioTotal.toFixed(2);
        let totalDiv = document.getElementById("div_sumaPrecio");
        totalDiv.innerHTML = ` $ ${precioTotalForm} `;

    };
};

renderizarCarrito();

//BORRO ITEM DEL HTML AL HACER CLICK EN EL ICONO DE BORRAR

let itemsCarrito = document.querySelectorAll("li.li_itemCarrito");
for (item of itemsCarrito) {
    let trashIcon = item.children[2];
    let btnParent = trashIcon.parentNode;
    let divTitle = btnParent.children[0].innerHTML;
    trashIcon.addEventListener("click", () => {
        let itemDiv = trashIcon.parentElement;
        itemDiv.innerHTML = "";
        
        
        localStorage.getItem("carrito");
        
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