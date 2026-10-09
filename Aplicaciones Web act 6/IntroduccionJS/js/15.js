//Creamos 2 objetos
const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

//Unir dos objetos con el spread operator
//consta de tres puntos seguidos del objeto que queremos agregar y si quieres agregar más
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);       //el original no cambia
console.log(nuevoProducto);
