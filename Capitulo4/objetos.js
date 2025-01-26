let dia1 = {
  ardilla: false,
  eventos: ["trabajo", "toque un arbol", "pizza", "salir a correr"],
};
console.log(dia1.ardilla); // -> false
console.log(dia1.lobo); // -> undefined
dia1.lobo = false;
console.log(dia1.lobo); // -> false
console.log(dia1.eventos); // -> [ 'trabajo', 'toque un arbol', 'pizza', 'salir a correr' ]
console.log(dia1.eventos[0]); // -> trabajo

let descripciones = {
  trabajo: "Fui a trabajar",
  "toque un arbol": "Toque un arbol",
};
