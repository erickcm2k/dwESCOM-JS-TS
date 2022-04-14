let x = 10;
let y = '10';
let arr1 = [1,2,3];
let arr2 = [1,2,3];

// Cuando comparamos tipos de datos primitivos, comparamos su VALOR

// == Comparamos el valor, sin comparar el tipo de dato
console.log(x == y)

// === Comparamos tanto contenido como tipo de dato
console.log(x === y)

// Cuando comparamos tipos de datos no primitivos, comparamos sus REFERENCIAS (DIRECCIÓN DE MEMORIA)

console.log(arr1 === arr2);

let arr3 = arr1;

arr1.push(400);
arr3.push(500);


console.log(arr1);
console.log(arr3);

console.log(arr1 === arr3);

// 0 1 2 3 4 5 6 7 8 9 10
// arr1 vive en 0,1,2
// arr2 vive en 7,8,9