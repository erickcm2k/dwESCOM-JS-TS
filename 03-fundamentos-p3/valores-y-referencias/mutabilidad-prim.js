// Los tipos de datos primitivos son INMUTABLES.

let num = 10;
let str = 'hola';

console.log(num, str);

// Para cambiar los valores de los tipos de datos primitivos
// tenemos que sobreescribir el valor

num += 100; // num1 = num1 + 100;
str += ', mundo'

console.log(str)

console.log(str[2])

str[2] = 'X'

console.log(str[2])