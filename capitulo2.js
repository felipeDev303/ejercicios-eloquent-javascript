// CAPÍTULO 2

// Expresión (fragmento de código que produce valor)
1;
!false;

// Declaración (oración completa antes de cada ;) un programa es una lista de declaraciones
5 * 5;

// Vinculación (o variable, para "atrapar" y mantener valores)
let atrapado = 5 * 5;

let diez = 10;
console.log(diez * diez); // → 100

let humor = "ligero";
console.log(humor); //-> ligero
humor = "oscuro";
console.log(humor); //-> oscuro

// Vinculación == Tentáculos
let deudaLuigui = 140;
deudaLuigui = deudaLuigui - 35;
console.log(deudaLuigui); //->105

let uno = 1,
  dos = 2;
console.log(uno + dos); // -> 3

// var (let<2015) y const (constante)
var nombre = "felipe";
const saludo = "hola ";
console.log(saludo + nombre);

// Valores de retorno
console.log(Math.min(2, 4)); //->2
console.log(Math.max(2, 4)); //->4

console.log(Math.max(2, 4) * 2); //->8

// Flujo de control líneal
let elNumero = Number(prompt("Elige un número"));
console.log("Tu número es la raíz cuadrada de " + elNumero * elNumero);

// Flujo de control condicional (if)
let elNumero2 = Number(prompt("Elige un número")); // Pedimos un numero (prompt recibe string y se transforma a número con Number)
if (!Number.isNaN(elNumero2)) {
  console.log("Tu número es la raíz cuadrada de " + elNumero2 * elNumero2);
} // Si es número haz esto

// if-else
let elNumero3 = Number(prompt("Elige un número"));
if (!Number.isNaN(elNumero3)) {
  console.log("Tu número es la raíz cuadrada de " + elNumero3 * elNumero3);
} else {
  console.log("Te pedí un número :)");
}

// Ejemplo de bloque sin {} en una sola línea
if (1 + 1 == 2) console.log("Es verdad");
// → Es verdad

// else-if
let numerito = Number(prompt("Elige un número"));
if (numerito < 10) {
  console.log("Número pequeño");
} else if (numerito < 100) {
  console.log("Número mediano");
} else {
  console.log("Número grande");
}

// while

let numeroWhile = 0;
while (numeroWhile <= 12) {
  console.log(numeroWhile);
  numeroWhile = numeroWhile + 2;
}

let contador = 0;
let resultado = 1;
while (contador < 10) {
  resultado = resultado * 2;
  contador = contador + 1;
}
console.log(resultado);

let tuNombre;
do {
  tuNombre = prompt("Dime tu nombre");
} while (!tuNombre);
console.log(tuNombre);

// CICLO FOR
for (let numeroFor = 0; numeroFor <= 12; numeroFor = numeroFor + 2) {
  console.log(numeroFor);
}

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

/* 3. Tablero de ajedrez
        
        Escribe un programa que cree un *string* que represente una cuadrícula de 8 × 8, 
        usando caracteres de nueva línea para separar las líneas. En cada posición de la 
        cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un 
        tablero de ajedrez. Pasar este *string* a ``console.log`` 
        debería mostrar algo como esto: 
          # # # # 
         # # # # 
          # # # # 
         # # # # 
          # # # # 
         # # # # 
          # # # # 
         # # # #
        
         Cuando tengas un programa que genere este patrón, define una vinculación 
         tamaño = 8 y cambia el programa para que funcione con cualquier tamaño, dando 
         como salida una cuadrícula con el alto y ancho dados
        */

let size = 8;
let board = "";
for (i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}
console.log(board);
