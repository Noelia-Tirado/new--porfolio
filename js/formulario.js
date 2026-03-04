// ---- Validación del formulario y cada una de las casillas -----

const d = document

let nombreInput = d.getElementById('nombre')
let apellidoInput = d.getElementById('apellidos')
let telefonoInput = d.getElementById('telefono')
let emailInput = d.getElementById('email')
let formulario = d.getElementById('formulario')

function validarNombre(){
    const nombre = nombreInput.value 
    const nombrePattern = /^[a-zA-Z][a-zA-Z0-9]*$/
    if (nombre.length >= 3 && nombrePattern.test(nombre)){
        nombreInput.classList.add('valido')
        nombreInput.classList.remove('invalido')
        d.getElementById('nombreError').textContent = ''
    } else{
        nombreInput.classList.add('invalido')
        nombreInput.classList.remove('valido')
        d.getElementById('nombreError').textContent = 'El nombre de usuario debe tener al menos 3 caracteres y empezar con una letra'
    }
}

function validarApellido(){
    const apellido = apellidoInput.value
    const apellidoPattern = /^[a-zA-Z][a-zA-Z0-9]*$/
    if (apellido.length >= 3 && apellidoPattern.test(apellido)){
        apellidoInput.classList.add('valido')
        apellidoInput.classList.remove('invalido')
        d.getElementById('apellidosError').textContent = ''
    } else{
        apellidoInput.classList.add('invalido')
        apellidoInput.classList.remove('valido')
        d.getElementById('apellidosError').textContent = 'El apellido de usuario debe tener al menos 3 caracteres y empezar con una letra'
    }
}
function validarTelefono(){
    const telefono = telefonoInput.value 
    const telefonoPattern = /^\d{9}$/
    if (telefonoPattern.test(telefono)){
        telefonoInput.classList.add('valido')
        telefonoInput.classList.remove('invalido')
        d.getElementById('telefonoError').textContent = ''
    } else{
        telefonoInput.classList.add('invalido')
        telefonoInput.classList.remove('valido')
        d.getElementById('telefonoError').textContent = 'El número de teléfono tiene que tener 9 dígitos'
    }
}
function validarEmail(){
    const email = emailInput.value 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailPattern.test(email)){
        emailInput.classList.add('valido')
        emailInput.classList.remove('invalido')
        d.getElementById('emailError').textContent = ''
    } else{
        emailInput.classList.add('invalido')
        emailInput.classList.remove('valido')
        d.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido'
    }

}


function resetFormulario(){
    formulario.reset()
    nombreInput.classList.remove('valido')
    apellidoInput.classList.remove('valido')
    telefonoInput.classList.remove('valido')
    emailInput.classList.remove('valido')

}

nombreInput.addEventListener('input', validarNombre)
telefonoInput.addEventListener('input', validarTelefono)
emailInput.addEventListener('input', validarEmail)
apellidoInput.addEventListener('input', validarApellido)

formulario.addEventListener('submit', function(event){
   event.preventDefault()
   validarNombre()
   validarApellido()
   validarEmail()
   validarTelefono()

   if (nombreInput.classList.contains('valido') && emailInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && apellidoInput.classList.contains('valido')) {
   alert('Formulario enviado correctamente')
   resetFormulario()
   } else { 
    alert('Por favor, corrija los errores en el formulario')
   }
})

// ------CALCULAR PRESUPUESTO -------

//  ------ Función que calcula el presupuesto  ------ 
        function calcularPresupuesto() {
            let producto = document.getElementById("producto").value;
            let plazo = parseInt(document.getElementById("plazo").value) || 0;
            let extras = document.getElementsByName("extra");

            let total = 0;

            // ------ Precio según el producto que se elije-----
            if (producto == "web") total = 600;
            if (producto == "optimizacion") total = 250;
            if (producto == "funcionalidad") total = 350;

            //  ------ Se suman los extras seleccionados ------ 
            for (let i = 0; i < extras.length; i++) {
                if (extras[i].checked) {
                    total += parseInt(extras[i].value);
                }
            }

            //  ------ Se aplica descuento según el plazo introducido ------ 
            if (plazo >= 12) {
                total = total - (total * 0.15); // 15% de descuento
            } else if (plazo >= 6) {
                total = total - (total * 0.10); // 10% de descuento
            }

            //  ------ Se muestra el presupuesto final ------ 
            document.getElementById("presupuestoFinal").value = total.toFixed(2) + " €";
        }