//  ------ Usando JSON y fetch creamos el navbar  ------ 

let navbarLinks = document.getElementById('links-navbar')

fetch('assets/data/datos.json')
    .then(response => response.json())
    .then(data => {
        data.navItems.map((link) => {
    navbarLinks.innerHTML +=
    
        `<a href="${link.url}"> ${link.title} </a>`
    })
})

