
let prodVistoJSON = localStorage.getItem("prodVisto");
let prodVisto = JSON.parse(prodVistoJSON);

let divDetallesContainer = document.getElementById("detailPageContainer");
divDetallesContainer.innerHTML = `
    <div class="div_sectionTitle">
        <h2 id="h2_bookTitle">${prodVisto.titulo}</h2>
        <h3 id="h3_bookauthor">Por ${prodVisto.autor}</h3>
    </div>

    <div id="detailContainer">
        <img src=${prodVisto.img} alt="Portada" />
        <div id="textDetailContainer">
            <p id="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem nesciunt
            ipsa. Ratione amet numquam officia culpa optio! Perspiciatis nostrum soluta molestiae est?
            Placeat asperiores eos cupiditate, harum nisi voluptate.</p>
            <p id="editorial">${prodVisto.editorial}</p>
            <div id="infoPrecios">
                <p class="p_precioLista" id="enOferta_precioLista">$ ${prodVisto.precioLista}</p>
                <span class="span_precioOferta" id="enOferta_precioFinal">$ ${prodVisto.precioFinal} </span>
                <span class="span_descuento" id="enOferta_descuento">${prodVisto.descuento}</span>
                <button type="button" class="btn btn-primary btn_carrito" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" id="${prodVisto.idBoton}">Agregar al carrito &raquo;</button>
            </div>
        </div>
    </div>`


    fetch("../json/productos.json")
    .then(response => response.json())
    .then(productos => {

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

        verificarCarrito();


        // AGREGO UN EVENT LISTENER A TODOS LOS BOTONES "AGREGAR A CARRITO". BUSCO CUÁL ES EL PRODUCTO AGREGADO, SE EJECUTA LA FUNCIÓN verificarCarrito() PARA OBTENER EL ARRAY CARRITO QUE HAYA HASTA EL MOMENTO Y SE LE AGREGA EL PRODUCTO. LUEGO SE ENVÍA AL LOCAL STORAGE NUEVAMENTE. 

        let botonCompra = document.querySelector("button.btn_carrito");
        botonCompra.addEventListener('click', function (e) {
                let botonID = e.target.id;
                for (producto of productos) {
                    if (botonID === producto.idBoton) {
                        carrito.push(producto);
                        let carritoJ = JSON.stringify(carrito)
                        localStorage.setItem("carrito", carritoJ);
                    }
                };
        });
    });
