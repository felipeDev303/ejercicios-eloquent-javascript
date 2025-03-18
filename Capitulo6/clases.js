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

// Class (>2015)
class Conejo {
  constructor(tipo) {
    this.tipo = tipo;
  }
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
  }
}
let conejoAsesino = new Conejo("asesino");
let conejoNegro = new Conejo("negro");

//console.log(conejoAsesino);
//console.log(conejoNegro);

// Tienes permitido omitir el nombre de la clase en una expresión de clase.
/*let objeto = new (class {
  obtenerPalabra() {
    return "hola";
  }
})();
console.log(objeto.obtenerPalabra());
// -> hola
*/
// Sobreescribir propiedades
Conejo.prototype.dientes = "pequeños";
console.log(conejoAsesino.dientes); // pequeños

conejoAsesino.dientes = "largos,filosos, y sangrientos";
console.log(conejoAsesino.dientes); // largos,filosos, y sangrientos

console.log(conejoNegro.dientes); //pequeños
console.log(Conejo.prototype.dientes); // pequeños
