function Lista() {
  this.head = null;
}

function Nodo(value) {
  this.value = value;
  this.next = null;
}

let list = new Lista();
let nodo = new Nodo(5);

list.head = nodo;

console.log(nodo);
console.log(list);
