
let categoriaSolicitada= JSON.parse(localStorage.getItem("categoriaSolicitada")) || [];

let divResultadosContainer = document.getElementById("resultados");
categoriaSolicitada.forEach((producto) => {
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

fetch("../json/productos.json")
    .then(response => response.json())
    .then(productos => {
        
        let prodVisto = JSON.parse(localStorage.getItem("prodVisto")) || [];

        
        let linkDetalles = document.querySelectorAll("a.linkDetalles");
        linkDetalles.forEach((link) => {
            console.log(link);
            link.addEventListener('click', function (e) {
                let linkID = e.target.id;
                for (producto of productos) {
                    if (linkID === producto.idBoton) {
                        prodVisto = producto;
                        let prodVistoJ = JSON.stringify(prodVisto)
                        localStorage.setItem("prodVisto", prodVistoJ);
                    }
                };
            })
        })

        let categoriaSolicitada = [];
        
        let linkResultados = document.querySelectorAll("a.dropdown-item");
        linkResultados.forEach((link) => {
            link.addEventListener('click', function (e) {
                let linkID = e.target.id;
                for (producto of productos) {
                    if (linkID === producto.categoria) {
                        categoriaSolicitada.push(producto);
                        let categoriaSolicitadaJ = JSON.stringify(categoriaSolicitada)
                        localStorage.setItem("categoriaSolicitada", categoriaSolicitadaJ);
                    }
                };
            })
        })

    });
