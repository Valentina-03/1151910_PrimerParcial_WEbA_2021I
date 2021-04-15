function cargarDatos() {
    var url1 = "https://carlosreneas.github.io/endpoints/noticias.json";
    fetch(url1)
        .then(response => response.json())
        .then(data => generarNoticias(data))
        .catch(error => console.log("Error: " + error.message));
    
    var url2 = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";
    fetch(url2)
        .then(response => response.json())
        .then(data => generarCategoriaDeporte(data))
        .catch(error => console.log("Error: " + error.message));
    
    var url3 = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";
    fetch(url3)
        .then(response => response.json())
        .then(data => generarCategoriaTecnologia(data))
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

function generarCategoriaDeporte(data) {
    var section = document.querySelector("#deportes");
    var titulo = document.createElement("h4");
    titulo.innerHTML = `<h4>Deportes</h4><br>`;
    section.appendChild(titulo);
    for (var i=0; i<3; i++) {
        var elemento = document.createElement("section");
        elemento.innerHTML = `<p>${data[i].titulo}</p><hr>`;
        section.appendChild(elemento);
    }
}

function generarCategoriaTecnologia(data) {
    var section = document.querySelector("#tecnologia");
    var titulo = document.createElement("h4");
    titulo.innerHTML = `<h4>Tecnologia</h4><br>`;
    section.appendChild(titulo);
    for (var i=0; i<3; i++) {
        var elemento = document.createElement("section");
        elemento.innerHTML = `<p>${data[i].titulo}</p><hr>`;
        section.appendChild(elemento);
    }
}

cargarDatos();