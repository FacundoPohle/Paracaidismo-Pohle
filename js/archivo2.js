class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
    }
}

let productos = [];

const producto1 = new Producto("Remera Mendoza Skydiving", 1200);
const producto2 = new Producto("Gorra Mendoza Skydiving", 1100);
const producto3 = new Producto("Buzo Mendoza Skydiving", 3000);

productos = [producto1, producto2, producto3]

// console.log(productos)
for (const item of productos) {
    console.log(`El item ${item.nombre} tiene un valor de $ ${item.precio}`);
}
