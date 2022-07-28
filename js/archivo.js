/*FORMULARIO DE PRESUPUESTO*/

let opciones = []

let formulario1;

let inputTipoSalto;
let inputAdicional;

let presupuesto;

class salto {
    constructor(tipoSalto, adicional){
        this.tipoSalto = tipoSalto;
        this.adicional = adicional;
   }
}

function inicializarFormulario1(){
    formulario1 = document.getElementById('formulario1');
    inputTipoSalto = document.getElementById('tipoSalto');
    inputAdicional = document.getElementById('adicional');
}

inicializarFormulario1();

let opcion1 = 35000;
let opcion2 = 40000;
let alturaExtra = 6000;
let vinoEnElAire = 5000;

formulario1.onsubmit = (event) => {
    event.preventDefault();    

    let nuevoSalto = new salto(inputTipoSalto.value, inputAdicional.value);
 
    let opcion = inputTipoSalto.value

    switch (opcion) {
        case'opcion 1':
            opcion1MasAdicional(adicional);
            opciones.push(nuevoSalto)
            agregarOpciones();
            formulario1.reset();

            break;
        case 'opcion 2':
            opcion2MasAdicional(adicional);
            opciones.push(nuevoSalto)
            agregarOpciones();
            formulario1.reset();
            break;

        default:
            alert("Selecciona adecuadamente los campos");
            break;
    }
}

function agregarOpciones () {
    opciones.forEach (salto => {
         console.log(salto.tipoSalto)
         console.log(salto.adicional)
    })
}

const opcion1MasAdicional = () => {

    let adicional = inputAdicional.value;
    switch (adicional) {
        case 'alturaExtra':
            subopcion1 = opcion1 + alturaExtra;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center">El precio total es de $${subopcion1}<p>`
            break;
        case 'degustacion':
            subopcion1 = opcion1 + vinoEnElAire; 
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center">El precio total es de $${subopcion1}<p>`
            break;
        case 'ambos':
            subopcion1 = opcion1 + alturaExtra + vinoEnElAire;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center">El precio total es de $${subopcion1}<p>`
            break;
        case 'ningunAdicional':
            subopcion1 = opcion1;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center">El precio total es de $${subopcion1}<p>`
            break;
    
        default:
            alert(`Selecciona adecuadamente los campos`)
            break;
    }
}

const opcion2MasAdicional = () => {

    let adicional = inputAdicional.value;
    switch (adicional) {
        case 'alturaExtra':
            subopcion1 = opcion2 + alturaExtra;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center">El precio total es de $${subopcion1}<p>`
            break;
        case 'degustacion':
            subopcion1 = opcion2 + vinoEnElAire; 
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center">El precio total es de $${subopcion1}<p>`
            break;
        case 'ambos':
            subopcion1 = opcion2 + alturaExtra + vinoEnElAire;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center">El precio total es de $${subopcion1}<p>`
            break;
        case 'ningunAdicional':
            subopcion1 = opcion2;
            presupuesto = document.getElementById("presupuesto");
            presupuesto.innerHTML = `<p class="text-center">El precio total es de $${subopcion1}<p>`
            break;
    
        default:
            alert(`Selecciona adecuadamente los campos`)
            break;
    }
}


/*FORMULARIO DE CONTACTO*/

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

    if(inputNombre.value != "" && inputApellido.value != "" && inputEdad.value != "" && inputPeso.value != "" && inputDocumentacion.value != "" && inputEmail.value != "" && inputTelefono.value != "" && inputFecha.value != "" && inputCantidadDePersonas !== "" ){

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