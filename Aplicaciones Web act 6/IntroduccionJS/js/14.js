//Object.freeze
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//no te permite agregar, eliminar o modificar valores de las propiedades del objeto
Object.freeze(producto);

producto.imagen = "imagen.jpg"; //no se agrega

//Método para saber si un objeto está congelado
console.log(Object.isFrozen(producto));
console.log(producto);


//Object.seal
const producto2 = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//no te permite agregar ni eliminar propiedades del objeto
//pero sí te permite modificar los valores
Object.seal(producto2);

producto2.precio = 350;         //sí se modifica
producto2.imagen = "imagen.jpg"; //no se agrega

//Método para saber si un objeto está sellado
console.log(Object.isSealed(producto2));
console.log(producto2);
