function igualdadProfunda(obj1, obj2) {
  if (obj1 === obj2) return true; // Mismo objeto en memoria

  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false; // Si no son objetos o son null, no son iguales
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false; // Si tienen distinto número de claves, no son iguales

  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key)) return false; // Si obj2 no tiene la clave, no son iguales

    // Llamada recursiva para comparar objetos anidados
    if (!igualdadProfunda(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

// **Ejemplo de uso**
const objA = { name: "Alice", details: { age: 25, city: "New York" } };
const objB = { name: "Alice", details: { age: 25, city: "New York" } };
const objC = { name: "Alice", details: { age: 26, city: "New York" } };

console.log(igualdadProfunda(objA, objB)); // true
console.log(igualdadProfunda(objA, objC)); // false
