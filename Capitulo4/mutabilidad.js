let objeto1 = { valor: 10 };
let objeto2 = objeto1;
let objeto3 = { valor: 10 };

console.log(objeto1 == objeto2); // true
console.log(objeto1 == objeto3); // false

objeto1.valor = 15;
console.log(objeto2.valor); // 15
console.log(objeto3.valor); // 10
