/* Se llama a "prodVisto" del local storage guardado según se indica en index.js o resultados.js y se renderiza su contenido: */

let prodVistoJSON = localStorage.getItem("prodVisto");
let prodVisto = JSON.parse(prodVistoJSON);

let divDetallesContainer = document.getElementById("detailPageContainer");
if (prodVisto.descuento != 0) { /* se renderiza con el formato de libro en oferta (descuento, etc) */
    divDetallesContainer.innerHTML = `
        <div class="div_sectionTitle">
            <h2 id="h2_bookTitle">${prodVisto.titulo}</h2>
            <h3 id="h3_bookauthor">Por ${prodVisto.autor}</h3>
        </div>

        <div id="detailContainer">
            <img id="img_detallesPage" src=${prodVisto.img} alt="Portada" />
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
} else{ /* se renderiza sin el formato de oferta */

    divDetallesContainer.innerHTML = `
    <div class="div_sectionTitle">
        <h2 id="h2_bookTitle">${prodVisto.titulo}</h2>
        <h3 id="h3_bookauthor">Por ${prodVisto.autor}</h3>
    </div>

    <div id="detailContainer">
        <img id="img_detallesPage" src=${prodVisto.img} alt="Portada" />
        <div id="textDetailContainer">
            <p id="descripcion">${prodVisto.descripcion}</p>
            <p id="editorial">EDITORIAL: ${prodVisto.editorial}</p>
            <div id="infoPrecios">
                <span class="span_precioOferta" id="enOferta_precioFinal">$ ${prodVisto.precioFinal} </span>
                <button type="button" class="btn btn-primary btn_carrito" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" id="${prodVisto.idBoton}">Agregar al carrito &raquo;</button>
            </div>
        </div>
    </div>`

}
