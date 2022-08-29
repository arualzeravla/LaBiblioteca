/* Se inserta en el html únicamente los productos que tengan indicada como categoría la que seleccionó el usuario en el dropdown (la categoría seleccionada queda guardada en el local storage según se indica en categoriaSolicitada.js) */

let resultados = JSON.parse(localStorage.getItem("resultados")) || [];
console.log(resultados);

let divResultadosContainer = document.getElementById("resultados");

if (resultados.length === 0) {
    let titleDiv = document.getElementById("titleDiv");
    titleDiv.parentNode.removeChild(titleDiv);
    divResultadosContainer.innerHTML += `<h2> Ups! Parece que tu búsqueda no ha obtenido resultados. ¡Seguimos sumando ejemplares a nuestra colección! </h2>  `
} else {
    resultados.forEach((producto) => {
        divResultadosContainer.innerHTML += `
            <div id="detailContainer">
                <img src=${producto.img} alt="Portada" class="imgResultados"</>
                <div id="textDetailContainer">
                    <h2 id="h2_bookTitle">${producto.titulo}</h2>
                    <h3 id="h3_bookauthor">Por ${producto.autor}</h3>
                    <p id="editorial">EDITORIAL: ${producto.editorial}</p>
                    <p><a class="btn btn-secondary linkDetalles" id=${producto.idBoton} href="./detalles.html">Ver más &raquo;</a></p>
                </div>
            </div>
            <hr>`
    });

}