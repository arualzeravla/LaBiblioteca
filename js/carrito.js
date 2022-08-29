let carrito =  JSON.parse(localStorage.getItem("carrito")) || [] ;

fetch("../json/productos.json")
    .then(response => response.json())
    .then(productos => {

        // Se declara la variable "carrito" con el valor de lo que haya ya en el carrito en el local storage. Si no existe, se le designa el valor de unarray vacío:


        // Evento de todos los botones "Agregar al carrito" que identifica el producto seleccionado según el ID del botón, lo suma al array "carrito" y lo envía al local storage:

        let botonesCompra = document.querySelectorAll("button.btn_carrito");
        botonesCompra.forEach((btn) => {
            btn.addEventListener('click', function (e) {
                let botonID = e.target.id;
                for (producto of productos) {
                    if (botonID === producto.idBoton) {
                        carrito.push(producto);
                        let carritoJ = JSON.stringify(carrito)
                        localStorage.setItem("carrito", carritoJ);
                        break;
                    }else{
                        localStorage.setItem("carrito", "[]");
                    }
                };
            })
        });
    });