// SCOPE EN JS
let x = 10; // Alcance global
if (true) {
  let y = 20; // alcance local
  var z = 30; // alcance global
  console.log(x + y + z); //-> 60
}
console.log(x + z); //-> 40
