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