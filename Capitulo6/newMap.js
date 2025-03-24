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

console.log(`Julia tiene ${edades.get("Julia")}`);
// -> Julia tiene 37
console.log("Se conoce la edad de Jack?", edades.has("Jack"));
// -> Se conoce la edad de Jack? false
console.log(edades.has("toString"));
// -> false
