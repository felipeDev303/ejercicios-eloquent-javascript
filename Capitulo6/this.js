// THIS
/*
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

// Problemas comunes con this

// Harry Potter y el misterio de this
const harry = {
  nombre: "Harry",
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}!`);
  },
};

harry.saludar(); // Hola, me llamo Harry!

const saludar = harry.saludar;
saludar(); // Hola, me llamo undefined!

// Default binding
function quienSoy() {
  console.log(`Hola, so yo: `, this);
}

quienSoy();

// Implicit Bending
const felipe = {
  nombre: "Felipe",
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}!`);
  },
  hermano: {
    nombre: "Fernando",
    saludar: function () {
      console.log(`Yo, el hermano, me llamo ${this.nombre}`);
    },
  },
};

// Problema: Al no tener el enlazamiento implícito (con punto) se aplica el enlazamiento por defecto
// Al estar en modo estricto this es undefined
/*const pelusa = {
	nombre: "Pelusa",
	twitter: '@pelusacat',
	saludar: function () {
		function siguemeEnTwitter () {
			console.log(`Sígueme en Twitter: ${this.twitter}`)
		}
		console.log(`Hola, me llamo ${this.nombre}!`);
		siguemeEnTwitter();
	},
};


const pelusa = {
  nombre: "Pelusa",
  twitter: "@pelusacat",
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}!`);
    this.siguemeEnTwitter();
  },
  siguemeEnTwitter: function () {
    console.log(`Sígueme en Twitter: ${this.twitter}`);
  },
};

pelusa.saludar();
*/

const pablo = {
  nombre: "Pablo",
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}!`);
  },
};

const saludar = pablo.saludar;
saludar(); // Hola, me llamo undefined!

// podemos guardar este método en una variable, sin invocarslo todavía,
// esa variable contiene una función y para invocarla se podría llamar de manera suelta,
// pero al no estar en modo estricto, this, es el objeto global la cual no tiene una propiedad nombre
