const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const saludar = (edad) => console.log(`Tengo ${edad} años.`);


numbers.forEach((num, index, array) => {
  console.log(num, index, array);
});

//for(let i = 0; i < numbers; i++)

numbers.forEach(saludar)
