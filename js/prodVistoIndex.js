/* Este archivo únicamente está ligado a index.html ya que necesita diferente ruta al json. Evento de botones "Ver más" que atrape la información del libro que se desea ver y guardarla en el local storage como "prodVisto" para renderizar luego en la página "detalles.html" según "detalles.js": */


fetch("./json/productos.json")
.then(response => response.json())
.then(productos => {
    let prodVisto = [];
    let linkDetalles = document.querySelectorAll("a.linkDetalles");
    linkDetalles.forEach((link) => {
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
})