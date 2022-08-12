fetch("../json/productos.json")
    .then(response => response.json())
    .then(productos => {
        productos.forEach(producto => {
            let div = document.getElementById("enOferta_artContenedor");
            div.innerHTML += `
        <img class="img_producto" src="${producto.img}" alt="">
        <rect width="100%" height="100%" fill="#777" />

        <h2 class="fw-normal" id="enOferta_titulo"> ${producto.titulo} </h2>
        <p id="enOferta_autor"> ${producto.autor} </p>
        <p id="enOferta_editorial"> ${producto.editorial} </p>
        <p class="p_precioLista" id="enOferta_precioLista">${producto.precioLista}</p>
        <span class="span_precioOferta" id="enOferta_precioFinal"> ${producto.precioLista} </span>
        <span class="span_descuento" id="enOferta_descuento">${producto.descuento}</span>
        <button type="button" class="btn btn-primary btn_carrito" data-bs-toggle="modal" data-bs-target="#exampleModal" id="${producto.idBoton}">Agregar al carrito &raquo;</button> `
        })



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

        let botonesCompra = document.querySelectorAll("button.btn_carrito");
        botonesCompra.forEach((btn) => {
            //console.log(btn);
            btn.addEventListener('click', function (e) {
                let botonID = e.target.id;
                        for (producto of productos) {
                            console.log(botonID);
                            if (botonID === producto.idBoton) {
                                carrito.push(producto);
                                let carritoJ = JSON.stringify(carrito)
                                localStorage.setItem("carrito", carritoJ);
                            }
                        };
                    })
            });
        });



