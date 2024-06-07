/*Ejercicios

1. Ciclo de un triángulo 
    Escriba un ciclo que haga siete llamadas a ``console.log`` para generar el siguiente triángulo: 
    ``#`` 
    ``## ``
    ``###`` 
    ``####`` 
    ``#####`` 
    ``######`` 
    ``#######``

    Puede ser útil saber que puedes encontrar la longitud de un *string* escribiendo ``.length`` después de él:
        let abc = "abc"; console.log(abc.length); */

let hash = "#";
while (hash.length <= 7) {
  console.log(hash);
  hash = hash + "#";
}
console.log("fin");

/* 

2. FizzBuzz
Escribe un programa que use ``console.log`` para imprimir todos los números de 1 a 100, 
con dos excepciones. Para números divisibles por 3, imprime ``"Fizz"`` en lugar del número, 
y para los números divisibles por 5 (y no 3), imprime ``"Buzz"`` en su lugar. 
Cuando tengas eso funcionando, modifica tu programa para imprimir ``" FizzBuzz"``, 
para números que sean divisibles entre 3 y 5 (y aún imprimir ``"Fizz"`` o ``"Buzz"`` 
para números divisibles por solo uno de ellos). (Esta es en realidad una pregunta de 
    entrevista que se ha dicho elimina un porcentaje significativo de candidatos a 
    programadores. Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir)
*/
// vinculamos nuestra variable
let numero = 1;
while (numero <= 100) {
  // Limite
  if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("FizzBuzz");
  } else if (numero % 3 == 0) {
    console.log("Fizz");
  } else if (numero % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(numero);
  }
  numero++; // contador
}
console.log("fin"); // Salida fuera del bucle while
