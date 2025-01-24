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
como salida una cuadrícula con el alto y ancho dados*/

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

// Otra opción
let tamaño = Number(prompt("Elige un número")) / 2;
let contadora = 0;
while (contadora < tamaño) {
  console.log(` # # # #\n# # # #`);
  contadora++;
}
