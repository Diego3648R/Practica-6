//Crear objetos
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

//Agregar nuevas propiedades a un objeto
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades a un objeto
delete producto.disponible;
console.log(producto);
