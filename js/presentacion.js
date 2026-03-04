//  ------ Usando JSON y fetch hacemos la section presentación  ------ 

let presentacionContainer = document.getElementById('presentacion-container')

fetch('assets/data/datos.json')
    .then(response => response.json())
    .then( data => {
        data.presentacion.map((item) => {
    presentacionContainer.innerHTML +=

    `
    <img class="img-circle" src="./assets/miku.jpg" alt="Foto de Noelia tirado" height="600" width="600">
        <h3> ${item.nombre}- ${item.puesto}</h3>
        <p> ${item.descripcion} </p>
        <div class="iconos">
            <a href= ${item.linkedin} target="_blank">
                <img class="icono" src="./assets/linkedin-svgrepo-com.svg" alt="Icono linkedIn" height="40" width="40">
            </a>
            <a href=${item.github} target="_blank">
                 <img class="icono" src="./assets/github-142-svgrepo-com.svg" alt="Icono GitHub" height="40" width="40">
            </a>
            <a href="${item.cvLink}" target="_blank">
                <img class="icono" src="./assets/file-cv-svgrepo-com.svg" alt="Icono de curriculum" height="40" width="40">
            </a>
        </div>

    `
})

    })

