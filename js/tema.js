//  ------ Función que salta cuando el DOM se carga para cambiar el tema de la web  ------ 
document.addEventListener('DOMContentLoaded', () => {
    const temaActual = localStorage.getItem('theme') || 'light'
    let botonTema = document.getElementById('change-theme')
    let iconoLight = document.getElementById('icono-light')
    let iconoDark = document.getElementById('icono-dark')

    //  ------ Actualizamos iconos dependiendo de si está light o dark ------ 
    function actualizarIconos(tema){
        if(tema === 'dark'){
            iconoLight.style.display = 'inline'
            iconoDark.style.display = 'none'
        } else {
            iconoLight.style.display = 'none'
            iconoDark.style.display = 'inline'
        }
    }
//  ------  Se aplica el tema actual al body------ 
    document.body.classList.add(temaActual + '-theme')
    actualizarIconos(temaActual)

    botonTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme')
         document.body.classList.toggle('light-theme') 
        
         const nuevoTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
         localStorage.setItem('theme', nuevoTema)
         actualizarIconos(nuevoTema)
        
        })
    
})