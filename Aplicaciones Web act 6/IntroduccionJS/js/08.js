//Orden de las operaciones
//Sigue la prioridad de los operadores

let resultado;

//primero la multiplicación, después la suma.
resultado = 20 * 30 + 2;
console.log(resultado);

//Si quieres cambiar la prioridad utiliza los paréntesis
resultado = 20 * (30 + 2);
console.log(resultado);

//Supongamos que queremos ofrecer un 20% de descuento de un carrito de compras
resultado = (100 + 200 + 300) * .2;
console.log(resultado);

//Otro ejemplo es un impuesto
resultado = (600 + 600) * 1.16;
console.log(resultado);

//Incrementos
let puntaje = 10;
puntaje++; //incrementa en 1
console.log(puntaje);

//Decrementos
puntaje--; //decrementa en 1
console.log(puntaje);

//Incrementar en más de uno
puntaje += 10; //incrementa en 10
console.log(puntaje);
