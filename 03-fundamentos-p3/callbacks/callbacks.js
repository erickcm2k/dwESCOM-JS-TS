// Para este caso, las funciones hacen lo mismo.
// function suma(x, y) {
//     return x + y;
// }

const suma = (x, y) => x + y;
const mult = (x, y) => x * y;
const resta = (x, y) => x - y;

const operaciones = (cb, x, y) => {
  const resultado = cb(x, y);
  console.log(`El resultado es: ${resultado}`);
};

operaciones(suma, 10, 20);
operaciones(mult, 10, 20);
operaciones(resta, 10, 20);
operaciones(function (x,y) {
    return x / y
},10, 20);