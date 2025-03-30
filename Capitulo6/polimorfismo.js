// Polimorfismo: el mismo método puede tener diferentes implementaciones en diferentes clases.
class Conejo {
  constructor(tipo) {
    this.tipo = tipo;
  }
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
  }
}
let conejoAsesino = new Conejo("asesino");

console.log(conejoAsesino); // Conejo { tipo: 'asesino' }

Conejo.prototype.toString = function () {
  return `Conejo de tipo ${this.tipo}`;
};

console.log(String(conejoAsesino)); // Antes: [object Object] --> Ahora: Conejo de tipo asesino

Array.prototype.forEach.call(
  {
    length: 2,
    0: "A",
    1: "B",
  },
  (elt) => console.log(elt)
);
// A
// B
let array = [2, 3, "hola", {}];
console.log(array.length); // 4
console.log(array[3]); // {}
