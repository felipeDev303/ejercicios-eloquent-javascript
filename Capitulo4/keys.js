let objeto = {
  x: 0,
  y: 1,
  z: 2,
};

console.log(Object.keys(objeto));

const persona = {
  nombre: "María",
  edad: 25,
  ciudad: "Madrid",
};

Object.keys(persona).forEach((clave) => {
  console.log(`${clave}: ${persona[clave]}`);
});
