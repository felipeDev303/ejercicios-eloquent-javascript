let beers = ["erdinger", "corona", "delirium"];
let wines = ["chardonnay", "merlot", "cabernet"];

// Mutable
beers.push("heineken"); // Agrega al final
beers.unshift("modelo"); // Agrega al inicio
beers.splice(2, 0, "bud"); // Insertar y reemplazar en un posición

let b = beers.pop(); // Elimina el último y lo devuelve
let b2 = beers.shift(); // Elimina el primero y lo devuelve
console.log(b); // heineken
console.log(b2); // modelo
console.log(beers.indexOf("corona")); //2 (-1 si no existe, busqueda es estricta)

// Inmutable
//const alcoholicDrinks = beers.concat(wines);
//alcoholicDrinks.push("carmenere");

//const onlyWines = alcoholicDrinks.slice(4, 8);

beers.fill("cervezas", 0, beers.length);

showDom("array1", beers);
showDom("array2", wines);

function show(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log[i];
  }
}

function showDom(element, arr) {
  document.getElementById(element).innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    document.getElementById(element).innerHTML += `<div>${arr[i]}<div>`;
  }
}
