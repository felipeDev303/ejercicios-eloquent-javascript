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
while (hash.length < 7) {
  console.log(hash);
  hash = hash + "#";
}
