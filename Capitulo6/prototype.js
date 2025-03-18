// Ejemplo
let vacio = [];
console.log(vacio.toString); // [Function: toString]
console.log(vacio.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null

// Object.create

let conejoPrototipo = {
  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
  },
};

let conejoAsesino = Object.create(conejoPrototipo);
conejoPrototipo.tipo = "asesino";
conejoPrototipo.hablar("SKREEEE!");
// El conejo asesino dice 'SKREEEE!'
