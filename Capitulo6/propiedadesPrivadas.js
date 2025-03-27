class SecretiveObject {
  #getSecret() {
    return "Me comí todas las ciruelas";
  }
  interrogate() {
    let deboDecirlo = this.#getSecret();
    return "Nunca";
  }
}

let miSecreto = new SecretiveObject();

console.log(miSecreto.interrogate());
// -> Nunca

// console.log(miSecreto.#getSecret);
// -> No se puede acceder a la propiedad "#getSecret" fuera de la clase "SecretiveObject" porque tiene un identificador privado.ts(18013)

class RandomSource {
  #max;
  constructor(max) {
    this.#max = max;
  }
  getNumber() {
    return Math.floor(Math.random() * this.#max);
  }
}

let random = new RandomSource(1000000);

console.log(random.getNumber());
