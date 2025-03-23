const cheff = {
  tipo: "Cocina Básica",
  cocinar: function (plato) {
    console.log(`Cocinando ${plato}`);
  },
  presentarse: function () {
    console.log(`Yo soy un cheff especializado en ${this.tipo}`);
  },
};

const felipe = {
  nombre: "Felipe",
  edad: 36,
  profesion: "Developer",
  tipo: "Front-End",
  toString() {
    console.log(this.nombre);
  },
};
// No aconsejables en un proyecto real
// felipe.__proto__ = cheff;
Object.setPrototypeOf(felipe, cheff);

// felipe.cortar('zanahoria') invocarlo antes no se puede

cheff.cortar = function (ingrediente) {
  console.log(`Cortando ${ingrediente}`);
};

// Busqueda en tiempo de ejecución en felipe y luego a su prototipo cheff que si tiene cortar
felipe.cortar("zanahoria");

console.log(Object.prototype.__proto__); // null

//Esta propiedad se suscribe en el objeto felipe no el prototipo cheff,
// ya que al asignar una propiedad no se recorre la cadena de prototipos
felipe.cocinar = function () {
  console.log("Yo no sé cocinar");
};

console.log(felipe.__proto__ === cheff); // cheff es el prototipo de felipe? true
cheff.isPrototypeOf(felipe); // true

Object.prototype.isPrototypeOf(felipe); // true

felipe.presentarse(); // Yo soy un cheff especializado en Front-End
