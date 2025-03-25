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

// Sobreescribir propiedades
Conejo.prototype.dientes = "pequeños";
//console.log(conejoAsesino.dientes); // pequeños

conejoAsesino.dientes = "largos,filosos, y sangrientos";
//console.log(conejoAsesino.dientes); // largos,filosos, y sangrientos

//console.log(conejoNegro.dientes); //pequeños
//console.log(Conejo.prototype.dientes); // pequeños

Conejo.prototype.toString = function () {
  return `un conejo ${this.tipo}`;
};

console.log(String(conejoNegro)); // un conejo negro

let simbolo = Symbol("nombre");
console.log(simbolo == Symbol("nombre"));
// -> false

Conejo.prototype[simbolo] = 55;
console.log(conejoNegro[simbolo]); // 55

// Sobrecarga el comportamiento de los arrays agregando un nuevo método personalizado mediante símbolos.
// Se crea un símbolo único (Los símbolos son únicos, incluso si tienen el mismo nombre interno)
const simboloToString = Symbol("toString");

//Se añade un método personalizado al prototipo de Array
Array.prototype[simboloToString] = function () {
  return `${this.length} cm de hilo azul`;
};

// Se comparan los resultados de toString() nativo y el nuevo método
console.log([1, 2].toString());
// -> 1,2
console.log([1, 2][simboloToString]());
// -> 2 cm de hilo azul

//Creación del objeto con una propiedad de símbolo

let objetoString = {
  [simboloToString]() {
    return "una cuerda de cañamo";
  },
};

console.log(objetoString[simboloToString]());
// → "una cuerda de cañamo"
