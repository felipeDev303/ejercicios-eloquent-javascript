// CLASES: sin utilizar la palabra new
function crearConejo(tipo) {
  let conejo = Object.create(conejoPrototipo);
  conejo.tipo = tipo;
  return conejo;
}

// NEW
function Conejo(tipo) {
  this.tipo = tipo;
}
Conejo.prototype.hablar = function (linea) {
  console.log(`El conejo ${this.tipo} dice '${linea}'`);
};
let conejoRaro = new Conejo("raro");

console.log(Object.getPrototypeOf(Conejo) == Function.prototype); // true
console.log(Object.getPrototypeOf(conejoRaro) == Conejo.prototype); // true
