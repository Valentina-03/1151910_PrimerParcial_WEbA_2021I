function cargarDatos() {
    var url = "https://carlosreneas.github.io/endpoints/noticias.json";
    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(error => console.log("Error: " + error.message));
}

function generarNoticias(data) {
    var section = document.querySelector("#noticias");
    var imagen = document.createElement("img");
    imagen.src = data[0].img;
    section.appendChild(imagen);
    for (var i=0; i<3; i++) {
        var elemento = document.createElement("section");
        elemento.innerHTML = `<h3>${data[i].titulo}-${data[i].categoria}-${data[i].fecha}</h3>
        <p>${data[i].descripcion}. <a href="#">Ver más</a></p>`;
        section.appendChild(elemento);
    }
}

cargarDatos();