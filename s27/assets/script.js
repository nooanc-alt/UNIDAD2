let nombre = "ingatotu";
console.log("ANTES DE LA CONDICIONAL");

if (nombre.length < 5) {
    console.log("QUE NOMBRE TAN CORTO TIENES"
    );
} else {
    console.log("TU NOMBRE NO ES TAN CORTO");
}

console.log("Reto 2");



let edad = 19;

if (edad >= 18) {
console.log("Eres mayor de edad.");
} else {
console.log("Eres menor de edad.");
}



console.log("RETO 3");



let num1 = 7;

let num2 = 7;

console.log(`Primer numero -> ${num1}`);
console.log(`Segundo numero -> ${num2}`);

if (num1 > num2) {
  console.log("El primer numero es el mayor.");
} else if (num2 > num1) {
  console.log("El segundo numero es el mayor.")
} else {
  console.log("Ambos numeros son iguales")
}

console.log("Anidación");

edad = 24;
let estaEnUSA = true;

if (edad >= 18) {
  if (estaEnUSA) {
    if (edad >= 24) {
      console.log("Es mayor de edad.");
    } else {
      console.log("Es menor de edad.");
    }
  } else {
    console.log("Es mayor de edad.");
  }
} else {
  console.log("Es menor de edad.");
}

console.log("Switch Case");
let numeroMes = 15;

switch (numeroMes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  default:
    console.log("VALOR NO VALIDO.");
}


