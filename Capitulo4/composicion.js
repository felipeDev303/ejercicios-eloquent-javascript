const SCRIPTS = require("./scripts.js");

function cuentaDeCaracteres(codigo) {
  return codigo.ranges.reduce((cuenta, [desde, hasta]) => {
    return cuenta + (hasta - desde);
  }, 0);
}

// Código más grande sin funciones de orden superior

let mayor = null;
for (let codigo of SCRIPTS) {
  if (mayor == null || cuentaDeCaracteres(mayor) < cuentaDeCaracteres(codigo)) {
    mayor = codigo;
  }
}
console.log(mayor);

// Función que encuentre el año de origen promedio para los códigos vivos y los códigos muertos
function promedio(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(
    promedio(
      SCRIPTS.filter((codigo) => codigo.living).map((codigo) => codigo.year)
    )
  )
); // 1165

console.log(
  Math.round(
    promedio(
      SCRIPTS.filter((codigo) => !codigo.living).map((codigo) => codigo.year)
    )
  )
); // 204

/*
1. Todos los códigos 
2. Filtramos vivos o muertos
3. Tomamos los años de cada grupo
4. Promediamos
5. Redondeamos
*/

// Lo mismo pero con un ciclo : IMPERATIVO!!

let total = 0,
  cuenta = 0;
for (let codigo of SCRIPTS) {
  if (codigo.living) {
    total += codigo.year;
    cuenta += 1;
  }
}

console.log(Math.round(total / cuenta)); // 1165
