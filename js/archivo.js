let opcion;

let opcion1 = 35000;

let subopcion1;

let opcion2 = 45000;

let subopcion2;

let alturaExtra = 6000;

let vinoEnElAire = 5000;

const opcion1MasAdicional = () => {
    switch (total) {
        case 1:
            subopcion1 = opcion1 + alturaExtra;
            console.log(`El precio total es de ${subopcion1}`)
            break;
        case 2:
            subopcion1 = opcion1 + vinoEnElAire; 
            console.log(`El precio total es de ${subopcion1}`)
            break;
        case 3:
            subopcion1 = opcion1 + alturaExtra + vinoEnElAire;
            console.log(`El precio total es de ${subopcion1}`)
            break;
    
        default:
            console.log(`El precio total es de $35000`)
            break;
    }
}

const opcion2MasAdicional = () => {
    switch (total) {
        case 1:
            subopcion2 = opcion2 + alturaExtra;
            console.log(`El precio total es de ${subopcion2}`)
            break;
        case 2:
            subopcion2 = opcion2 + vinoEnElAire; 
            console.log(`El precio total es de ${subopcion2}`)
            break;
        case 3:
            subopcion2 = opcion2 + alturaExtra + vinoEnElAire;
            console.log(`El precio total es de ${subopcion2}`)
            break;
    
        default:
            console.log(`El precio total es de $45000`)
            break;
    }
}

do {
    opcion = Number(prompt("Elija una opcion de salto:\n\n1 - Opcion 1\n2 - Opcion 2\n3 - Salir"))

    switch (opcion) {
        case 1:
            total = Number(prompt ("Si desea un adicional seleccione la opcion:\n\n1 - Altura extra\n2 - Degustacion de vno en el aire\n3 - Ambos\n4- Ningún adicional"));
            opcion1MasAdicional(total);
            break;
        case 2:
            total = Number(prompt ("Si desea un adicional seleccione la opcion:\n\n1 - Altura extra\n2 - Degustacion de vno en el aire\n3 - Ambos\n4- Ningun adicional"));
            opcion2MasAdicional(total);
            break;
        case 3:
            alert("Gracias por su tiempo");
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }

} while(opcion !== 3);