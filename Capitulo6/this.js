// THIS

function getName() {
  //console.log(this); // nos muestra todo el objeto global si no hay otro dueño
  console.log(`Mi nombre es ${this.nick}`);
}

//global.nick = "global-nick";

//getName(); // global === globalThis === window (al principio no tenemos nada por lo que es undefined, es el dueño de la funcion)

var felipe = {
  nick: "muñeco",
  getName,
};

felipe.getName(); // el dueño de la ejecución del método es el objeto felipe que luego llegará al this del getName
// window.getName(); // 'Mi nombre es undefined'

// THIS EN ARROW FUNCTION: no le puede cambiar el valor a this
function context() {
  const getName = () => {
    console.log(`Mi nombre es ${this.nick}`);
  };
  getName();
}

var king = {
  nick: "Lebron",
  context: context,
};

king.context();
