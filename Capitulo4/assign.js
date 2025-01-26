// Object.assign -> Copiar propiedades

const objetoFuente = { a: 1, b: 2 };
const objetoDestino = { c: 3 };

Object.assign(objetoDestino, objetoFuente);

console.log(objetoDestino); // { c: 3, a: 1, b: 2 }

// Object.assign -> Clonar objetos

const original = { nombre: "Ana", edad: 25 };
const copia = Object.assign({}, original);

console.log(copia); // { nombre: "Ana", edad: 25 }
console.log(copia === original); // false (son objetos diferentes)

// Object.assign -> Combinar múltiples objetos (sobreescribe propiedades)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

const resultado = Object.assign({}, obj1, obj2, obj3);

console.log(resultado); // { a: 1, b: 3, c: 5, d: 6 }

// Object.assign -> Copia superficial: cuidado con objetos anidados

const fuente = { info: { edad: 30 } };
const destino = Object.assign({}, fuente);

destino.info.edad = 40;
console.log(fuente); // { info: { edad: 40 } }
