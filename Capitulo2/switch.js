//SWITCH
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("Usa paragüas");
    break;
  case "soleado":
    console.log("Usa bloqueador");
    break;
  case "nublado":
    console.log("Sal sin cuidado");
    break;
  default:
    console.log("clima desconocido");
    break;
}
