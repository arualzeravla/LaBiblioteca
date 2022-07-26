//Mensaje de bienvenida
//alert ("Bienvenido a La Biblioteca. Aquí se abre la puerta a la imaginación. ¡Adelante!");

//Definimos el stock:

/* const productos = [
    {titulo: "libro 1", editorial: "edi 1", precio: 3200, stock: 3},
    {titulo: "libro 2", editorial: "edi 2", precio: 1200, stock: 11},
    {titulo: "libro 3", editorial: "edi 3", precio: 2500, stock: 9},
    {titulo: "libro 4", editorial: "edi 2", precio: 3800, stock: 12},
    {titulo: "libro 5", editorial: "edi 1", precio: 4100, stock: 8}
];


class Producto {
    constructor(titulo, editorial, precio, stock) {
        this.titulo = titulo;
        this.editorial = editorial;
        this.precio = precio;
        this.stock = stock;
    }
};

//Busqueda de libros
let libroBuscado = prompt("Ingrese el título del libro que desea buscar");
let libroBuscado2 = productos.find(libro => libro.titulo === libroBuscado.toLocaleLowerCase());

if(libroBuscado2 === "undefined"){
            alert("¡Ups! Parece que tu libro aún no está en nuestro stock. Puedes solicitárnoslo por e-mail o whatsapp: 1166115623 - info@labiblioteca.com.ar")
} else {
    alert (`¡Tenemos tu libro! Es de la editorial ${libroBuscado2.editorial} y sale $${libroBuscado2.precio}. Presiona OK y lo agregaremos a tu carrito.`)
}; */

let formulario = document.getElementById("formCompra");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    if(e.target.children[0].value.length == 0 || e.target.children[1].value.length == 0 || e.target.children[2].value.length == 0 || e.target.children[3].value.length == 0 ){
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Debes ingresar todos los datos solicitados";
        document.body.append(mensaje);
    }else{
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Tu compra ha sido registrada. Recibirás el pedido de 3 a 5 días hábiiles.";
        document.body.append(mensaje);
    }
}

      





