// Función rango recibe 2 parámetros el inicio y el final del array
function rango(inicio, final, paso) {
  let listaDeNumeros = [inicio];
  let resultado = inicio;

  while (resultado !== final) {
    resultado = resultado + paso;
    listaDeNumeros.push(resultado);
  }
  console.log(listaDeNumeros);
  const SUMANUM = listaDeNumeros.reduce((acc, el) => acc + el, 0);

  console.log(SUMANUM);
}
rango(1, 10, 2);

/*// Función rango recibe 2 parámetros el inicio y el final del array
function rango(inicio, final,paso) {
    let listaDeNumeros = [inicio];
    let resultado = inicio;
  
    if (paso <0 ){
        while (resultado!==final){
            resultado = resultado - paso;
            listaDeNumeros.push(resultado); 
        }
    } else if (paso>0){
    while (resultado!==final){
        resultado = resultado + paso;
        listaDeNumeros.push(resultado); 
    } 
  } else {
    while (resultado!==final){    
         resultado++;
        listaDeNumeros.push(resultado)
    }
  };

    console.log(listaDeNumeros);
  
    const SUMANUM = listaDeNumeros.reduce((acc, el) => acc + el, 0);
    console.log(SUMANUM);
  };
  rango(1,10,2);*/

function rango(inicio, final, paso) {
  let listaDeNumeros = [final];
  let resultado = inicio;

  if (paso === 0 || paso === null) {
    for (resultado = inicio; resultado !== final; resultado++) {
      listaDeNumeros.push(resultado);
    }

    console.log(listaDeNumeros);
    const SUMANUM = listaDeNumeros.reduce((acc, el) => acc + el, 0);
    console.log(SUMANUM);
  } else if (paso < 0) {
    for (
      resultado = inicio;
      resultado !== final;
      resultado = resultado - paso
    ) {
      listaDeNumeros.push(resultado);
    }

    console.log(listaDeNumeros);
    const SUMANUM = listaDeNumeros.reduce((acc, el) => acc + el, 0);
    console.log(SUMANUM);
  } else if (paso > 0) {
    for (
      resultado = inicio;
      resultado !== final;
      resultado = resultado + paso
    ) {
      listaDeNumeros.push(resultado);
    }
    console.log(listaDeNumeros);
    const SUMANUM = listaDeNumeros.reduce((acc, el) => acc + el, 0);
    console.log(SUMANUM);
  } else {
    console.log("solo numeros");
  }
}
rango(5, 2, -2);
