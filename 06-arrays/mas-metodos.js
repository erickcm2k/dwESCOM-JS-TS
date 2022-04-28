// const frutas = ["fresa", "zarzamora", "platano", "manzana"];

//console.log(frutas);
// Todos los métodos listados aquí tienen una complejidad lineal

// reverse - Invierte un arreglo.
// console.log(frutas.reverse());
// console.log(frutas.reverse());

// map(cb) - Retornar un nuevo arreglo. Realizar una modificación (mapeo) del arreglo original
// const capitalize = (str) => str.toUpperCase();

// const nuevasFrutas = frutas.map(capitalize);
// console.log(nuevasFrutas);

// find(cb) - Retorna el primer elemento que cumpla con la condición especificada en el callback

// const personas = [
//   { nombre: "Jorge", edad: 20, semestre: 8 },
//   { nombre: "Juan", edad: 18, semestre: 4 },
//   { nombre: "Gerardo", edad: 17, semestre: 9 },
// ];

const buscarPorMayoriaDeEdad = (persona) => persona.edad >= 18;

// console.log(personas.find(buscarPorMayoriaDeEdad));

// findIndex(cb) - Retornar el índice del primer elemento que cumpla una condición

// console.log(personas.findIndex(buscarPorMayoriaDeEdad));

// filter(cb) - Retornar un nuevo arreglo con los elementos que cumplan la condición

// const personasFiltradas = personas.filter(buscarPorMayoriaDeEdad);
// console.log(personasFiltradas);

// reduce(cb) - Retorna un valor, después de aplicar una función de reducción a cada elemento
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.reduce((sumReducer, num) => sumReducer + num));

// concat(arr) - Crear un nuevo arreglo a partir de dos arreglos

// const nums1 = [1, 2, 3, 4, 5];
// const nums2 = [6, 7, 8, 9, 10];

// // const nums3 = nums1.concat(nums2);
// const nums3 = [...nums1, ...nums2]

// console.log(nums3);

// splice - Puede reemplazar, eliminar o agregar elementos en una cierta posicion de nuestro arreglo

// console.log(frutas);
// const citricos = ["naranja", "toronja", "mandarina"];
// // frutas.splice(0, 2); // A partir del índice 0, eliminamos 2 elementos.
// //frutas.splice(0, 2, ...citricos); // Agrega el contenido del nuevo arreglo en
// // el la posición 0, eliminando 2 elementos a partir de esa posición antes de insertarlos

// frutas.splice(2, 2, "higo"); // A partir del índice 2, eliminamos 2 elementos e insertamos el valor "higo"

// console.log(frutas);

const personas = [
  { nombre: "Jorge", edad: 16, semestre: 8 },
  { nombre: "Juan", edad: 15, semestre: 4 },
  { nombre: "Gerardo", edad: 17, semestre: 9 },
];

// every(cb) - devuelve true o false si TODOS los elementos del arreglo cumplen una condición especificada en el callback

// console.log(personas.every(buscarPorMayoriaDeEdad));

// some(cb) - devuelve true o false si ALGUNOS elementos del arreglo cumplen con una condición especificada en el callback

// console.log(personas.some(buscarPorMayoriaDeEdad));

// join(separador) - Une todos los elementos de un arreglo en una cadena

const frutas = ["fresa", "zarzamora", "platano", "manzana"];

// console.log(frutas.join(''));
// console.log(frutas.join(' '));
// console.log(frutas.join('-'));
// console.log(frutas.join(', '));

const myStr = "holamundo";

console.log(myStr); // Cadena original
console.log(myStr.split("")); // Cadena convertida a un arreglo de caracteres
console.log(
  myStr.split("").map((char, index) => `${index}${char.toUpperCase()}`)
); // Mapeamos nuestros caracteres con una condición
console.log(
  myStr
    .split("")
    .map((char, index) => `${index}${char.toUpperCase()}`)
    .join("")
); // Cadena nuevamente unida
