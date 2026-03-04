let opiniones = [];
let indiceActual = 0;

// -----Cargamos el archivo JSON------
fetch("assets/data/opiniones.json")
  .then(response => response.json())
  .then(data => {
    opiniones = data;
    mostrarOpinion();
    iniciarCarrusel(); 
  });

// ------Se muestra una opinión según el índice actual------
function mostrarOpinion() {
  document.getElementById("texto").textContent =
    opiniones[indiceActual].texto;

  document.getElementById("autor").textContent =
    "- " + opiniones[indiceActual].autor;
}

// --------Botones-------
document.getElementById("next").addEventListener("click", siguiente);

document.getElementById("prev").addEventListener("click", anterior);

function siguiente() {
  indiceActual++;

  if (indiceActual >= opiniones.length) {
    indiceActual = 0;
  }

  mostrarOpinion();
}

function anterior() {
  indiceActual--;

  if (indiceActual < 0) {
    indiceActual = opiniones.length - 1;
  }

  mostrarOpinion();
}

// -------Para que avance solo------
function iniciarCarrusel() {
  setInterval(() => {
    siguiente();
  }, 4000); 
}