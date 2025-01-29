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
