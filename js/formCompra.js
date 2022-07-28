let formulario = document.getElementById("formCompra");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    if(!e.target.children[0].value || !e.target.children[1].value || !e.target.children[2].value || !e.target.children[3].value){
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Debes ingresar todos los datos solicitados";
        document.body.append(mensaje);
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Tu compra ha sido registrada. Recibirás el pedido de 3 a 5 días hábiiles.";
        document.body.append(mensaje);
    }
};

let localCarrito = localStorage.getItem("carrito");
let carrito = JSON.parse(localCarrito);

for(producto of carrito){
    let carritoDiv = document.getElementById("div_carrito");
    carritoDiv.innerHTML += `<li> Título: ${producto.titulo} </li>
                                     <li> Precio: ${producto.precio}</li>`
};

