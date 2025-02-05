function phi(tabla) {
  return (
    (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
    Math.sqrt(
      (tabla[2] + tabla[3]) *
        (tabla[0] + tabla[1]) *
        (tabla[1] + tabla[3]) *
        (tabla[0] + tabla[2])
    )
  );
}
console.log(phi([76, 9, 4, 1])); // 0.06859943405700354

// DESESTRUCTURAR: La función anterior es incomoda de leer, ya que hay una vinculación apuntando al array, otra forma es apuntar
// a los elementos del array (let n00 = tabla[0] y así sucesivamente)
function phi([n00, n01, n10, n11]) {
  return (
    (n11 + n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}
