const rugbyPositions = [
  "Scrum-half",
  "Prop",
  "Hooker",
  "Locks",
  "Flanker",
  "Eighthman",
  "Fly-half",
  "Full-back",
  "Wing",
  "Centre",
  "Prop",
];

console.log(rugbyPositions.indexOf("Scrum-half")); // 0

// Empezar desde el índice 2
console.log(rugbyPositions.indexOf("Prop", 2)); // 10

console.log(rugbyPositions.indexOf("Arquero")); // -1

// 1. Si fromIndex es positivo o 0: Se empieza a buscar desde ese índice.
const arr = [10, 20, 30, 40, 50];

console.log(arr.indexOf(30, 2)); // 2 (lo encuentra en la posición 2)
console.log(arr.indexOf(10, 1)); // -1 (10 está en 0, pero busca desde 1 en adelante)

// 2. Si fromIndex es negativo
// Se interpreta como una posición relativa desde el final del array.
// Se convierte a un índice positivo sumándolo a la longitud del array.
console.log(arr.indexOf(30, -2)); // -2 → (5 + -2) = 3, busca desde el índice 3 → no encuentra 30 → retorna -1
console.log(arr.indexOf(40, -2)); // -2 → (5 + -2) = 3, encuentra 40 en 3 → retorna 3

// 3. Si fromIndex es menor que -array.length
// Se trata como 0, es decir, busca en todo el array
console.log(arr.indexOf(10, -100)); // Se trata como index 0 → retorna 0

// 4. Si fromIndex es mayor o igual que array.length
// No se realiza la búsqueda y se devuelve -1
console.log(arr.indexOf(10, 10)); // fromIndex >= array.length → retorna -1

// lastIndexOf()
console.log(rugbyPositions.lastIndexOf("Prop")); // 10
console.log(rugbyPositions.lastIndexOf("Hooker")); // 2
console.log(rugbyPositions.lastIndexOf("Arquero")); // -1

// 1️. Si fromIndex es positivo o 0
// La búsqueda comienza en fromIndex y va hacia atrás.
// Si fromIndex es 0, solo revisa la primera posición.
console.log(arr.lastIndexOf(30, 3)); // 2 (busca desde el índice 3 hacia atrás)
console.log(arr.lastIndexOf(30, 0)); // -1 (en índice 0 no hay 30)

// 2. Si fromIndex es negativo
// Se convierte en array.length + fromIndex, es decir, se cuenta desde el final.
console.log(arr.lastIndexOf(30, -2)); // -2 → (5 + -2) = 3, busca desde 3 → encuentra en 2
console.log(arr.lastIndexOf(30, -4)); // -4 → (5 + -4) = 1, busca desde 1 → no encuentra → retorna -1

// 3. Si fromIndex < -array.length
// Se trata como -1, es decir, no busca nada y devuelve -1.
console.log(arr.lastIndexOf(10, -100)); // -1 (fuera del rango, no busca nada)

// 4. Si fromIndex >= array.length
// Se trata como array.length - 1, es decir, busca desde el final
console.log(arr.lastIndexOf(10, 10)); // Busca desde índice 2 → retorna 0
