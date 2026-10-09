//Diferencias entre el tipo de funciones.

//Primera forma (declaración): funciona aunque la llames antes de crearla,
//porque JS primero registra todas las funciones y después ejecuta el código.
sumar();
function sumar() {
    console.log(10 + 10);
}

//Segunda forma (expresión): si llamas antes de crearla manda error,
//porque se considera como una variable.
//(quita las // de la siguiente línea para ver el error en la consola)
//sumar2();
const sumar2 = function () {
    console.log(3 + 3);
}
sumar2(); //aquí sí funciona porque ya fue creada
