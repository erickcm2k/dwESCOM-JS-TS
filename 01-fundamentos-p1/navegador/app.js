let persona = {
    nombre: "Juan",
    edad: 10,
    hobbies: ["leer", "dormir", [{a: "trotar", b: "nadar"}, "hob2", {}]],
    'aria-label': "Solo un ejemplo"
}

// console.log(persona.nombre)
// const oracion = "Hola" + persona.edad + " más cosas por decir..."
// const oracionSaludo = `Hola, mi nombre es ${persona.edad} y mi edad es de ${persona.edad} años y uno de mis hobbies es ${persona.hobbies[2]}`
// console.log(oracionSaludo)
// Accedemos a la propiedad a del tercer elemento del arreglo hobbies
// const hobbie1 = persona.hobbies[2][0].a;
// console.log(hobbie1);

// Convencional
const edadPersona = persona.edad;
const nombrePersona = persona.nombre;

// Object destructuring
const {nombre: myName, edad} = persona;

console.log(myName)
console.log(edad)
