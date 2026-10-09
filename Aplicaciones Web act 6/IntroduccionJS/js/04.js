//String o cadenas de texto

const producto = "Monitor de 20 pulgadas";
const producto2 = String("Monitor de 20 pulgadas");
const producto3 = new String("Monitor de 50 pulgadas");

//Lo compruebas con
console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3); //con new es un objeto

console.log(producto);

//Se pueden usar comillas o apóstrofes
const producto4 = 'Monitor de 20 pulgadas';
console.log(producto4);
