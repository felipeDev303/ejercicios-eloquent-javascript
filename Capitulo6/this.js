//  Cada función tiene su propia vinculación this
// Una función con function, this se asigna dinámicamente dependiendo de cómo se llame la función

function mostrarThis() {
  console.log(this);
}

const obj = { metodo: mostrarThis };

mostrarThis(); // Cuando llamas mostrarThis() directamente, this depende del modo de ejecución.
//  (en modo estricto es undefined, en no estricto es window)

obj.metodo(); // Cuando llamas obj.metodo(), this dentro de mostrarThis apunta a obj.

// Las funciones flecha no crean su propia vinculación this: lo heredan del contexto donde se definen

const objeto = {
  nombre: "Ejemplo",
  metodo: function () {
    const funcionFlecha = () => {
      // funcionFlecha no tiene su propio this, así que usa el this de metodo(), que es objeto.
      console.log(this.nombre);
    };
    funcionFlecha(); // `this` se mantiene ligado a `objeto`
  },
};

objeto.metodo(); // "Ejemplo"
