// Cuando pasamos como parámetro a una función
// un tipo de dato PRIMITIVO, estaremos pasando 
// una copia.

// const elevarAlCuadradoNum = (n) => {
//     n = 20;
//     return n;
// }

// const num = 10;
// console.log(num);
// console.log(elevarAlCuadradoNum(num));
// console.log(num);

// Cuando pasemos un tipo NO PRIMITIVO, estamos pasando 
// una referencia 

const nums = [1,2,3,4,5,6,7,8,9]

const elevarAlCuadrado = (numeros) => {
    for(let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] * numeros[i];
    }
    console.log(numeros);
}

const elevarAlCuadradoSinModificar = (numeros) => {
    let copia = [...numeros] // SPREAD OPERATOR
    for(let i = 0; i < copia.length; i++) {
        copia[i] = copia[i] * copia[i];
    }
}

// console.log(nums);
// elevarAlCuadrado(nums);
// console.log(nums);

console.log(nums);
elevarAlCuadrado([...nums]);
console.log(nums);