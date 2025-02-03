function puntoAleatorioEnCirculo(radio) {
  let anguloAlfa = Math.random() * 2 * Math.PI; // Ángulo aleatorio en radianes
  return {
    x: radio * Math.cos(anguloAlfa), // cos alfa = abscisa del punto/r = a/r -> si r=1 es la abscisa (x)
    y: radio * Math.sin(anguloAlfa), // sen alfa = ordenanda del punto/r b/r -> si r=1 es la ordenada (y)
  };
}
console.log(puntoAleatorioEnCirculo(1));
