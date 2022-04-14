// Los tipos de datos primitivos (number)
// SIEMPRE van a ser una copia.
const swap = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
}

let x = 10;
let y = 100;

console.log(x, y);
swap(x, y);
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);