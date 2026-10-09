//Métodos para los string

const tweet = "Monitor de 20 pulgadas";
const producto2 = "Monitor HD";

console.log(tweet);
console.log(producto2);

//Cantidad de caracteres en una cadena
//length es para la extensión
console.log(tweet.length);

//indexOf retorna la posición en que se encuentra un texto
console.log(tweet.indexOf("de"));
console.log(producto2.indexOf("de")); //si el valor es -1 significa que no existe

//includes retorna true o false
console.log(tweet.includes("de"));
console.log(producto2.includes("de"));

//Podemos usar estas funciones para validación de correo
const email = "correo@correo.com";
console.log(email.indexOf("@"));
