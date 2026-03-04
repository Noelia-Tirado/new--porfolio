//  ------ Usando JSON y fetch creamos la section de proyectos ------ 

let proyectoContainer = document.querySelector('.grid-2')

fetch('assets/data/datos.json')
    .then(response => response.json() )
    .then(data => {
        data.proyectos.map((item) => {

    proyectoContainer.innerHTML += 

    `
      <div class="proyectos-container" style="background-image: url(${item.imagen}) ;">
                    <div class="description">
                        <h3> ${item.nombre}</h3>
                        <P> ${item.descripcion} </P>
                        <small> ${item.tecnologias}</small>
                    </div>
                </div>
    
    `
})
    })
