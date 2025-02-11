function Lista() {
  this.head = null;
}

function Nodo(value) {
  this.value = value;
  this.next = null;
}

Lista.prototype.add = function (value) {
  if (this.head === null) this.head = new Nodo(value);
  else {
    let referencia = this.head;
    referencia.next = new Nodo(value);
    while (referencia.next !== null) {
      referencia = referencia.next;
    }
    referencia.next = new Nodo(valor);
  }
};

let list = new Lista();
// let nodo = new Nodo(1); list.head = nodo;
//let nodo2 = new Nodo(2); list.head.next = nodo2;

list.add(1);
list.add(2);

console.log(list);
