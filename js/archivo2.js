class Producto {
    constructor(id, nombre, precio, tipo) {
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.tipo = tipo;
    }
}

let productos = [];

const producto1 = new Producto(1, "Remera Mendoza Skydiving", 1200, 'remera');
const producto2 = new Producto(2, "Gorra Mendoza Skydiving", 1100, 'gorra');
const producto3 = new Producto(3, "Buzo Mendoza Skydiving", 3000, 'buzo');

productos = [producto1, producto2, producto3]

// console.log(productos)
// for (const item of productos) {
//     console.log(`El item ${item.nombre} tiene un valor de $ ${item.precio}`);
// }

let tipos = ['remera', 'gorra', 'buzo'];

productosEnCarro = [];

let tipo = '' ;

while (tipo != 'salir' && tipo != null) {
    let aux = tipos.join(', ')
    tipo = prompt('Ingrese el tipo del producto para comprar o ingrese "salir": \n(' + aux + ')');
  
    if (tipo != 'salir' && tipo != null) {
       let productosFiltradoPorTipo = productos.filter((item) => item.tipo == tipo);
       
       let cartel = '';
       for (let i = 0; i < productosFiltradoPorTipo.length; i++) {
          cartel += 
          'id:' + productosFiltradoPorTipo[i].id + ' ' + 
          ' precio:' + productosFiltradoPorTipo[i].precio + ' ' +
          ' producto:' + productosFiltradoPorTipo[i].nombre + '\n';          
       }

       console.log(productosFiltradoPorTipo)
       
       let idSeleccionado = parseInt(prompt('Seleccione id del producto que quiere comprar: \n\n' + cartel));
  
       let productoParaCarro = productosFiltradoPorTipo.find((item) => item.id == idSeleccionado);
  
       if(productoParaCarro) {
          productosEnCarro.push(productoParaCarro); 
       }
    }
}



  function comprar(nombre, productosEnCarro){
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);
    alert(`Gracias ${nombre} por tu compra. \n Total: $ ${cant}`)
};

if(productosEnCarro.length > 0) {
    alert('Ingrese sus datos para terminar su compra');
    let nombre = prompt('Ingrese su nombre');
    let email = prompt('Ingrese su eamail');
    let tel = prompt('Ingrese su tel');
    comprar(nombre, productosEnCarro)
    console.log(email, tel)
}

