
let formulario1;

let tipoSalto;
let opcion;
let opcion1;
let subopcion1;
let opcion2;
let subopcion2;
let alturaExtra;
let vinoEnElAire;

function inicializarFormulario1(){
    // formulario1 = document.getElementById('formulario1');
    // tipoSalto = document.getElementById('tipoSalto')
    opcion1 = 35000;
    opcion2 = 45000;
    alturaExtra = 6000;
    vinoEnElAire = 5000;
}

inicializarFormulario1();

function seleccionarTipoSalto(){
    tipoSalto = document.getElementById('tipoSalto');
    if(tipoSalto.value === 'opcion 1' || tipoSalto.value === 'opcion 2'){
        // let otro = tipoSalto.value;
        console.log(otro)
        document.getElementById('extra').innerHTML = `<div>
                                                       <select name="tipoSalto" id="tipoSaltoclass="formulario__boton">
                                                              <option>Seleccionar adicionales</option>  
                                                               <option value="camaraExtra">Camara extraoption>
                                                              <option value="alturaExtra">Altura extraoption>
                                                               <option value="degustacion">Degustacion dvino</option>
                                                      </select>
                                                    </div>`
    }
}

seleccionarTipoSalto();

// const opcion1MasAdicional = () => {
//     switch (total) {
//         case 1:
//             subopcion1 = opcion1 + alturaExtra;
//             alert(`El precio total es de $${subopcion1}`)
//             break;
//         case 2:
//             subopcion1 = opcion1 + vinoEnElAire; 
//             alert(`El precio total es de $${subopcion1}`)
//             break;
//         case 3:
//             subopcion1 = opcion1 + alturaExtra + vinoEnElAire;
//             alert(`El precio total es de $${subopcion1}`)
//             break;
    
//         default:
//             alert(`El precio total es de $35000`)
//             break;
//     }
// }

// const opcion2MasAdicional = () => {
//     switch (total) {
//         case 1:
//             subopcion2 = opcion2 + alturaExtra;
//             alert(`El precio total es de $${subopcion2}`)
//             break;
//         case 2:
//             subopcion2 = opcion2 + vinoEnElAire; 
//             alert(`El precio total es de $${subopcion2}`)
//             break;
//         case 3:
//             subopcion2 = opcion2 + alturaExtra + vinoEnElAire;
//             alert(`El precio total es de $${subopcion2}`)
//             break;
    
//         default:
//             alert(`El precio total es de $45000`)
//             break;
//     }
// }

// do {
//     opcion = Number(prompt("Elija una opcion de salto:\n\n1 - Opcion 1\n2 - Opcion 2\n3 - Salir"))

//     switch (opcion) {
//         case 1:
//             total = Number(prompt ("Si desea un adicional seleccione la opcion:\n\n1 - Altura extra\n2 - Degustacion de vno en el aire\n3 - Ambos\n4- Ningún adicional"));
//             opcion1MasAdicional(total);
//             break;
//         case 2:
//             total = Number(prompt ("Si desea un adicional seleccione la opcion:\n\n1 - Altura extra\n2 - Degustacion de vno en el aire\n3 - Ambos\n4- Ningun adicional"));
//             opcion2MasAdicional(total);
//             break;
//         case 3:
//             alert("Gracias por su tiempo");
//             break;
//         default:
//             alert("Opcion incorrecta");
//             break;
//     }

// } while(opcion !== 3);





let datos = [];

let formulario2;

let inputNombre;
let inputApellido;
let inputEdad;
let inputPeso;
let inputDocumentacion;
let inputEmail;
let inputTelefono;
let inputFecha;
let inputCantidadDePersonas;
let inputMasculino;
let inputFemenino;

let error;


class Dato {
    constructor(nombre, apellido, edad, peso, documentacion, email, telefono, fecha, cantidadDePersonas, masculino, femenino){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
        this.documentacion = documentacion;
        this.email = email;
        this.telefono = telefono
        this.fecha = fecha;
        this.cantidadDePersonas = cantidadDePersonas;
        this.masculino = masculino;
        this.femenino = femenino;
    }
}

function inicializarFormulario2(){
    formulario2 = document.getElementById("formulario2");
    inputNombre = document.getElementById("nombre");
    inputApellido = document.getElementById("apellido");
    inputEdad = document.getElementById("edad");
    inputPeso = document.getElementById("peso");
    inputDocumentacion = document.getElementById("documentacion");
    inputEmail = document.getElementById("email");
    inputTelefono = document.getElementById("telefono");
    inputFecha = document.getElementById("fecha");
    inputCantidadDePersonas = document.getElementById("cantidadDePersonas");
    inputMasculino = document.getElementById("masculino");
    inputFemenino = document.getElementById("femenino");

    error = document.querySelector("#error")
    error.innerHTML = `<p class="text-center text-danger shake-horizontal mt-3">*Por favor,completá los campos adecuadamente</p>`
    error.style.display = "none";
}

inicializarFormulario2();


formulario2.onsubmit = (event) => {
    event.preventDefault();

    let nuevoDato = new Dato(inputNombre.value, inputApellido.value, inputEdad.value, inputPeso.value, inputDocumentacion.value, inputEmail.value, inputTelefono.value, inputFecha.value, inputCantidadDePersonas.value, inputMasculino, inputFemenino);

    if(inputNombre.value != "" && inputApellido.value != "" && inputEdad.value != "" && inputPeso.value != "" && inputDocumentacion.value != "" && inputEmail.value != "" && inputTelefono.value != "" && inputFecha.value != "" && inputCantidadDePersonas.value != "" ){

        datos.push(nuevoDato)

        agregarDatos();

        formulario2.reset()

        error.innerHTML = `<p class="text-center text-success text-focus-in mt-3">¡Muchas gracias! Tu formulario ha sido enviado correctamente. A la brevedad nos contactaremos.</p>`
        error.style.display = 'block'

    } else {
        error.style.display = 'block'
    }
}

function agregarDatos () {
     datos.forEach (dato => {
          console.log(dato.nombre)
          console.log(dato.apellido)
          console.log(dato.edad)
          console.log(dato.peso)
          console.log(dato.documentacion)
          console.log(dato.email)
          console.log(dato.telefono)
          console.log(dato.fecha)
          console.log(dato.cantidadDePersonas)
          if (inputMasculino.checked) {
            console.log('masculino')
          }else {
            console.log('femenino')
          }
     })
}