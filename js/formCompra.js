
//CAPTURO EL CARRITO DEL LOCAL STORAGE(LS) Y LO PARSEO EN LA VARIABLE "carrito". EN CASO DE NO EXISTIR AÚN, CREO LA VARIABLE COMO UN ARRAY VACÍO

let carrito = JSON.parse(localStorage.getItem("carrito"));
 if (!carrito) {
    carrito = [];
};

//CREO FUNCION PARA RENDERIZAR EL PRECIO FINAL QUE SERA UTILIZADA PARA RENDERIZAR EL CARRITO


function actualizarPrecioFinal() {
    let totalDiv = document.getElementById("div_sumaPrecio");
    let precio = 0;
    if (carrito.length != 0){
        for (producto of carrito) {
        precio = precio + producto.precioFinal;
        let precioTotal = precio.toFixed(2);
        totalDiv.innerHTML = ` $ ${precioTotal} `;
        }
    } else {
        document.getElementById("div_precioTotText").remove();
        totalDiv.innerHTML = "Tu carrito está vacío."
    }
};


//INSERTO EL CARRITO ENCONTRADO EN EL HTML Y EJECUTO LA RENDERIZACION

function renderizarCarrito() {
    let carritoUl = document.getElementById("ul_carrito");
        for (item of carrito) {
            let precioFormatted = item.precioFinal.toFixed(2);
            carritoUl.innerHTML += `<li class="li_itemCarrito"> 
                                    <div class="div_tituloCarrito">${item.titulo}</div>
                                    <div class="div_precioCarrito"> $ ${precioFormatted}</div>
                                    <div class="div_trashIcon"> <i class="fa-solid fa-trash-can"></i> </div>
                                </li>`
        };
        actualizarPrecioFinal();
};

renderizarCarrito();






//FUNCION PARA BORRAR ITEM DEL LOCAL STORAGE Y DEL HTML AL HACER CLICK EN EL ICONO DE BORRAR:

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

        actualizarPrecioFinal();

    })
};


//VALIDO FORMULARIO DE COMPRA

let formulario = document.getElementById("formCompra");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let errorDiv = document.getElementById("errorDiv");

    if (!e.target.children[0].value || !e.target.children[1].value || !e.target.children[2].value || !e.target.children[3].value || !e.target.children[4].value) {
        errorDiv.classList.add("errorDiv")
        errorDiv.innerHTML = " [x] Debes ingresar todos los datos solicitados";
    } else {
        errorDiv.innerHTML = "";
        Swal.fire({
            icon: 'success',
            title: '¡Tu compra ha sido realizada!',
            text: 'Te contactaremos en menos de 48hs hábiles para confirmar el pago y acordar el envío.',
        })
    }
};