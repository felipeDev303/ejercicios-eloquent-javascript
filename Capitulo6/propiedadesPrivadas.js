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

// Ejemplo Cuenta Bancaria
class CuentaBancaria {
  #saldo = 0;
  #numeroDeCuenta = Math.floor(
    Math.random(toString(36).substring(2, 9)) * 1000000
  ); // Genera un número de cuenta aleatorio de 7 dígitos
  constructor(saldoInicial) {
    // Constructor que recibe el saldo inicial
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    this.#actualizarSaldo(monto);
  }

  retirar(monto) {
    if (monto <= this.#saldo) {
      this.#actualizarSaldo(-monto);
    } else {
      console.log("Fondos insuficientes");
    }
  }

  obtenerSaldo() {
    return `El saldo de la cuenta ${this.#numeroDeCuenta} es ${this.#saldo}`;
  }

  #actualizarSaldo(monto) {
    this.#saldo += monto;
  }
}

let JuanCuenta = new CuentaBancaria(100);
JuanCuenta.depositar(50);
JuanCuenta.retirar(30);
console.log(JuanCuenta.obtenerSaldo()); // El saldo de la cuenta es 120
