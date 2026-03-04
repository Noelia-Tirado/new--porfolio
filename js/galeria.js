// Dado que ya había usado el carrusel, no quería volver a usarlo para hacer una galeria dinámica
//Investigando un poco encontré este tipo de galería sencilla 

//  ------ Array con las imágenes  ------ 

let proyectos = [
    {
        titulo: "Restaurante Disfrutar",
        categoria: "restaurante",
        imagen: "assets/imgs/Disfrutar.png"
    },
    {
        titulo: "Landing moderna",
        categoria: "landing",
        imagen: "assets/imgs/Landing.png"
    },
    {
        titulo: "Taller Online",
        categoria: "talleres",
        imagen: "assets/imgs/Mecanico.png"
    },
    {
        titulo: "Mudanzas",
        categoria: "mudanza",
        imagen: "assets/imgs/Mudanza.png"
    },
    {
        titulo: "Taller especializado en neumáticos",
        categoria: "talleres",
        imagen: "assets/imgs/Ruedas.png"
    },
    {
        titulo: "Restaurante Tsuro",
        categoria: "restaurante",
        imagen: "assets/imgs/Tsuro.png"
    }
];

//  ------ Mostramos las imágenes en el contenedor  ------ 

let contenedor = document.getElementById("contenedor-galeria");

function mostrarProyectos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(proyecto => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
            <h3 class=title>${proyecto.titulo}</h3>
        `;

        contenedor.appendChild(div);
    });
}

mostrarProyectos(proyectos);

//  ------ Creamos los botones que van a cambiar las categorías  ------ 
const botones = document.querySelectorAll(".filtros button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.dataset.categoria;

        if (categoria === "todas") {
            mostrarProyectos(proyectos);
        } else {
            const filtrados = proyectos.filter(
                proyecto => proyecto.categoria === categoria
            );
            mostrarProyectos(filtrados);
        }
    });
});