let edades1 = {
  Boris: 29,
  Julia: 37,
  Felipe: 36,
  Liang: 38,
};
console.log(`Julia tiene ${edades1["Julia"]}`);
//-> Julia tiene 37
console.log("Se conoce la edad de Jack?", "Jack" in edades1);
//-> Se conoce la edad de Jack? false
console.log("Se conoce la edad de toString?", "toString" in edades1);
// -> Se conoce la edad de toString? true -> Si no está en edades busca en Object.prototype

// Solución 1: pasarle null a Object.create(null), así no deriva de Object.prototype
console.log("toString" in Object.create(null));
// -> false

let edades = new Map();
edades.set("Boris", 29);
edades.set("Julia", 37);
edades.set("Felipe", 36);
edades.set("Liang", 38);

console.log(edades.size); // -> 4

// Obtener el valor de una clave
console.log(`Julia tiene ${edades.get("Julia")}`);
// -> Julia tiene 37

// Comprobar si existe una clave
console.log("Se conoce la edad de Jack?", edades.has("Jack"));
// -> Se conoce la edad de Jack? false (como in en el objeto)

console.log(edades.has("toString"));
// -> false

// Comprobar si existe una clave (en el prototipo)
console.log({ x: 1 }.hasOwnProperty("x"));
// -> true

// Comprobar si existe una clave (en el prototipo)
console.log({ x: 1 }.hasOwnProperty("toString"));
// -> false

// Los métodos getter se definen escribiendo get antes del nombre del método en una expresión de objeto o declaración de clase.
// Se pueden usar para definir propiedades que se calculan dinámicamente en lugar de almacenarse directamente en el objeto.
// Por ejemplo, el siguiente objeto tiene una propiedad size que devuelve un número aleatorio entre 0 y 100 cada vez que se accede a ella:
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varyingSize.size); // -> 20
console.log(varyingSize.size); // -> 71

function speak(line) {
  console.log(`El conejo ${this.type} dice '${line}'`);
}

let conejoBlanco = {
  type: "blanco",
  speak,
};

// Llamada al método desde el objeto
conejoBlanco.speak("Hola");
// -> El conejo blanco dice 'Hola'

// Getter
class Conejo {
  constructor(type) {
    this.type = type;
  }
  get speak() {
    return `El conejo ${this.type} dice 'Hola'`;
  }
}

let conejoNegro = new Conejo("Negro");
console.log(conejoNegro.speak); // Acceso como propiedad
// -> El conejo Negro dice 'Hola'

// Getter vs Setter
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
    this._edad = 0; // propiedad interna
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad < 0) {
      console.log("La edad no puede ser negativa");
    } else {
      this._edad = nuevaEdad;
    }
  }
}

let persona = new Persona("Felipe");

persona.edad = 36; // se llama al setter
console.log(persona.edad);

persona.edad = -5;
console.log(persona.edad);

// Métodos estáticos

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
//console.log(temp.fahrenheit); // -> 71.6 ( se llama al getter)

//temp.fahrenheit = 100; // se llama al setter
//console.log(temp.celsius); // -> 37.77777777777778

console.log(Temperature.fromFahrenheit(86)); // -> Temperature { celsius: 30 }
// no es necesario instanciar la clase para usar el método estático
