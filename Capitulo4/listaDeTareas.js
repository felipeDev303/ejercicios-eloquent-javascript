// Administración de una cola de tareas
let listaDeTareas = [];
function recordar(tarea) {
  // agregar tarea al final de la cola
  listaDeTareas.push(tarea);
}
function obtenerTarea() {
  // obtener tarea del principio de la cola y lo borra
  return listaDeTareas.shift();
}
function recordarUrgentemente(tarea) {
  // agregar una tarea al principio de la cola
  listaDeTareas.unshift(tarea);
}
