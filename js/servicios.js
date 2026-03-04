// ------  Usando lo aprendido de JSON y fetch hacemos la section de servicios ------ 
let servicios = document.querySelector('.serviceContainer')

fetch('assets/data/datos.json')
    .then(response => response.json())
    .then( data => {
        data.servicios.map((item) => {
    servicios.innerHTML +=

      `
        <div class="services">
           <p> <strong>${item.titulo} </strong> <br> <br> ${item.descripcion} <br> <br> </p>
        </div>

    `
})

    })
