console.log("probando")


// Thruthy & Falsy


// if (30 === 30) {
//   console.log("Esto se imprime")
// }

if (-20) {
  // cualquier numero, excepto el 0, tienen un aspecto thruty. JS lo interpreta como algo verdadero
  // el numero 0 tiene un aspecto falsy. JS lo interpreta como un algo falso
  console.log("Esto se imprime")
}

if (" ") {
  // strings con contenido tienen aspecto thruthy
  // string "" es el unico string que se interpreta como falsy
  console.log("esto se imprime")
}


/* 
false
0
""
null
undefined
NaN
*/

if (false || 0 || "" || null || undefined || NaN) {
  console.log("esto nunca se verá")
}




// ejemplo

let username = ""


if (username) {
  console.log(`Hola ${username}, Bienvenido!`)
} else {
  console.log("Hola extraño! Bienvenido por primera vez")
}




// FUNCTIONS


function nombreDeFuncion( /* parametros opcionales */ ) {

  // codigo que se ejecute cada vez que yo invoque/active la funcion

  return // opcionalmente se devolvera un valor como resultado de la funcion

}

// para activar/invocar la funcion
nombreDeFuncion( /* argumentos opcionales */ )



// ejemplo

function decirHola( username ) {
  // let username
  // console.log(username)

  console.log(`Hola ${username}`)

}

decirHola( "Antonio" )
decirHola( "Diego" )
decirHola( "Alicia" )
decirHola( "David" )
decirHola( "Alberto" )
decirHola( "Alejandro" )



// otro ejemplo

// function addNumbers( patata1, patata2 ) {

//   // console.log(patata1)
//   // console.log(patata2)

//   let sum = patata1 + patata2
//   // console.log(sum)

//   return sum

// }

function addNumbers(num1, num2) {
  return num1 + num2
}

// const addNumbers = (num1, num2) => {
//   return num1 + num2
// }

// console.log(sum)
// como sacar los resultados de la funcion fuera de la funcion?


let result1 = addNumbers( 10, 15 )
let result2 = addNumbers( 90, 200 )

console.log(result1)
console.log(result2)

console.log(`los resultados son: ${result1} y ${result2}`)


// ejemplo 3


let staff1 = "ruth";
let staff2 = "leidy";

function capitalize( string ) {
  // let string = "ruth"
  // let string = "leidy"

  let capString = string[0].toUpperCase() + string.slice(1)
  return capString

  // o...

  // return string[0].toUpperCase() + string.slice(1)

} 

let staff1Cap = capitalize( staff1 )
let staff2Cap = capitalize( staff2 )


console.log(`Nuestro staff está comprendido por: ${staff1Cap} y ${staff2Cap}`)

// o...

console.log(`Nuestro staff está comprendido por: ${capitalize(staff1)} y ${capitalize(staff2)}`)



// Tipos de funciones

function funcionDeDeclaracion (  ) {
  return "soy una funcion de declaracion"
}

const funcionDeExpresion = function (  ) {
  return "soy una funcion de expresion"
} 

const funcionDeFlecha = (  ) => {
  return "soy una funcion de flecha"
} 

// la invocacion es igual

// SOLO CUANDO ESCRIBIMOS UNA LINEA EN LA FUNCION:
// 1. la ponemos en la misma linea
// 2. quitamos las llaves
// 3. si la linea es un return, la palabra "return" está implicita. No la necesitamos.
const funcionDeFlechaReducida = (  ) => "soy una funcion de flecha"


// ARRAYS

/*

[ elemento1, elemento2, elemento3 ]

*/

let myArray = [ "hola", 2, true, undefined, null, NaN, [ "adios" ], { name: "jorge" }  ]
console.log(myArray)


let cities = [ "Madrid", "Cadiz", "Malaga", "Valencia", "Barcelona", "Berlin" ]


console.log(cities.length)

// notacion de corchetes
console.log(cities[0])


// quiero buscar el primer caracter de la primera ciudad
console.log( cities[0][0]  ) // "M"


// quiero buscar el primer caracter del la ultima ciudad
console.log( cities[ cities.length - 1 ][0] )


// quiero buscar el ultimo caracter de la ultima ciudad
// console.log( cities[ cities.length - 1 ][] )

let lastCity = cities[cities.length - 1] // Berlin
let lastCharacter = lastCity[lastCity.length - 1] // n
console.log(lastCharacter)


// metodos de arrays

// .indexOf

let indexOfValencia = cities.indexOf("Valencia")
console.log(indexOfValencia) // 3

let indexOfTokyo = cities.indexOf("Tokyo")
console.log(indexOfTokyo) // -1

// .includes()

let indexOfMalaga = cities.includes("Malaga")
console.log(indexOfMalaga) // true o false


// .slice()

let middleTwoCities = cities.slice(2, 4) // donde empieza y donde termina (sin incluir)
console.log(middleTwoCities)

let allExceptFirst = cities.slice(1)
console.log(allExceptFirst)

// tambien podemos darle valor negativo => copiar desde el final

// let onlyTwoFinalCities = cities.slice(cities.length - 2, cities.length)
let onlyTwoFinalCities = cities.slice(-2)
console.log(onlyTwoFinalCities)


// quiero un array pero solo incluya la primera ciudad y la ultima ciudad

let firstAndLastCity = [ cities[0], cities[cities.length - 1] ]
console.log(firstAndLastCity)
