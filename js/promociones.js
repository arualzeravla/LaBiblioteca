/* Se inserta en el html únicamente los productos que tengan descuento indicado en productos.json */

fetch("../json/productos.json")
    .then(response => response.json())
    .then(productos => {
        productos.forEach(producto => {
            let div = document.getElementById("enOferta_artContenedor");
            if (producto.descuento != 0) {
                div.innerHTML += `
                <div class="col-lg-4 div_producto">
                    <img class="img_producto" src="${producto.img}" alt="">
                    <rect width="100%" height="100%" fill="#777" />

                    <h2 class="fw-normal" id="enOferta_titulo"> ${producto.titulo} </h2>
                    <p id="enOferta_autor"> ${producto.autor} </p>
                    <p id="enOferta_editorial"> Editorial: ${producto.editorial} </p>
                    <p class="p_precioLista" id="enOferta_precioLista">$ ${producto.precioLista}</p>
                    <span class="span_precioOferta" id="enOferta_precioFinal"> $ ${producto.precioLista} </span>
                    <span class="span_descuento" id="enOferta_descuento">${producto.descuento}</span>
                    <button type="button" class="btn btn-primary btn_carrito" data-bs-toggle="modal" data-bs-target="#exampleModal" id="${producto.idBoton}">Agregar al carrito &raquo;</button> 
                </div>`
            }
        })

    });