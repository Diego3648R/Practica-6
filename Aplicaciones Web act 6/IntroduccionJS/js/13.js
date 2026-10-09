const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Forma anterior
//crear la variable y extraer el valor
const precioProducto = producto.precio;
console.log(precioProducto);

const nombreProducto1 = producto.nombreProducto;
console.log(nombreProducto1);

//Destructuring de objetos
//Lo que hace destructuring es extraer el valor y crear la variable en un solo paso
const { precio } = producto;
console.log(precio);

//También se pueden extraer varios a la vez
//(la variable debe llamarse igual que la propiedad del objeto)
const { nombreProducto, disponible } = producto;
console.log(nombreProducto);
console.log(disponible);
