// 1) Arreglos con partes de la excusa
let who = ["Mi perro", "Mi abuela", "El cartero", "Mi gato", "El vecino"];
let action = ["comió", "rompió", "olvidó", "perdió", "mojó"];
let what = ["mi tarea", "mi tarea del colegio", "el teléfono", "el proyecto", "mis apuntes"];
let when = [
  "antes de la clase",
  "cuando dormía",
  "en el recreo",
  "durante la comida",
  "mientras veía televisión"
];

// 2) Función que elige una parte al azar
function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 3) Función que genera la excusa completa
function generateExcuse() {
  return `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`;
}

// 4) Insertar la excusa en la página
document.getElementById("excuse").innerText = generateExcuse();
