 /* Este archivo únicamente está ligado a index.html ya que necesita diferente ruta al json. Evento de opciones del nav bar, dropdown "CATEGORÍAS", que atrapa la categoría seleccionada y la guardar en el local storage como "categoriaSolicitada" para renderizar en la página "resultados.html": */



 fetch("./json/productos.json")
     .then(response => response.json())
     .then(productos => {

         let resultados = [];

         let linkResultados = document.querySelectorAll("a.dropdown-item");
         linkResultados.forEach((link) => {
             link.addEventListener('click', function (e) {
                 let linkID = e.target.id;
                 for (producto of productos) {
                     if (linkID === producto.categoria) {
                         resultados.push(producto);
                         let resultadosJ = JSON.stringify(resultados)
                         localStorage.setItem("resultados", resultadosJ);
                     }
                 };
             })
         })
     });