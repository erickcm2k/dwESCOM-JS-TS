const frutas = ["fresa", "zarzamora", "platano", "manzana"];

console.log(frutas);

// push() - O(1) Agrega elementos al final del arreglo
// frutas.push("mora azul");
// console.log(frutas);

// pop() - O(1) Elimina 1 elemento al final del arreglo
// console.log(frutas.pop());
// console.log(frutas);

// unshift() - O(n) Agrega elementos al principio del arreglo
// frutas.unshift("higo");
// console.log(frutas);

// shift() - O(n) Elimina el primer elemento del arreglo
// console.log(frutas.shift());
// console.log(frutas.shift());
// console.log(frutas);

const citricos = ["naranja", "toronja", "mandarina"]

frutas.push(...citricos)
console.log(frutas);