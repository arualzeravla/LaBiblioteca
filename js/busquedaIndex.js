 /* Este archivo únicamente está ligado a index.html ya que necesita diferente ruta al json. Evento de la barra de búsqueda, que atrapa el input y lo compara con el json de productos para renderizarlo en la página "resultados.html" */

 fetch("./json/productos.json")
    .then(response => response.json())
    .then(productos => {

        let searchInput = document.getElementById("searchInput");

        searchInput.addEventListener("keyup", (e) => {
            let resultados = [];
            if (e.key === "Enter") {
                for (producto of productos) {
                    if (searchInput.value.toLowerCase() === producto.titulo.toLowerCase() || searchInput.value.toLowerCase() === producto.autor.toLowerCase()) {

                        resultados.push(producto);

                        let resultadosJ = JSON.stringify(resultados)
                        localStorage.setItem("resultados", resultadosJ);
                        break;
                    } else {
                        localStorage.setItem("resultados", "[]");
                    }
                }

                window.location.href = "./html/resultados.html"
            }
        })
    });