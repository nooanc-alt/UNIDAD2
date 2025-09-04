console.log("Hola mundo");
let sumando1 = 6;
let sumando2 = 4;
console.log(sumando1);
console.log(sumando2);
let resultadoSuma = sumando1 + sumando2;
console.log(resultadoSuma);

let minuendo = 5;
let sustraendo = 15;
let resta = minuendo - sustraendo;

console.log("RESULTADO RESTA");
console.log(resta);

let factor1 = 15;
let factor2 = 20;
let producto = factor1 * factor2;

console.log("RESULTADO MULTIPLICACION");
console.log(producto);

let dividendo = 15;
let divisor = 3;
let cociente = dividendo / divisor;

console.log("RESULTADO DIVISIÓN");
console.log(cociente);

console.log("OPERACION COMBINADA");
console.log(20 + 5 / (2 + 3) * 2);

let moduloNum1 = 16;
let moduloNum2 = 4;
let resultadoModulo = moduloNum1 % moduloNum2;
console.log("RESULTADO MODULO");
console.log(resultadoModulo);

let base = 4;
let exponente = 6;
let resultadoPotencia = base**exponente;

console.log("RESULTADO POTENCIA");
console.log(resultadoPotencia);

let valor1 = 6;
let valor2 = 3;

let mayorQue = valor1 > valor2;
console.log(mayorQue);
console.log(valor1 > valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor2);

let datoNumber = 1; 
let datoString = '1';
// IGUALDAD
console.log(datoNumber == datoString);
// true
// IDENTIDAD
console.log(datoNumber === datoString)
// false

//  DIFERENTE (NEGACION DE LA IGUALDAD O IDENTIDAD) 
console.log (datoNumber != datoString);  // false
console.log(datoNumber !== datoString); // true


// backticks
let backticks = `string entre  backticks ocomillas invertidas`;
console.log(backticks);

nombreCompleto = "Noemi Alca";
let edad = 18;
let saludo = `Hola, me llamo ${nombreCompleto}! Tengo ${edad} años,`;

let tieneDNI = true;
let esMayorDeEdad = edad >= 18;
// EJEMPLO DE OPERADORES LÓGICOS //
console.log("¿Puede votar?");
console.log(tieneDNI && esMayorDeEdad); // true si cumple ambas condiciones

console.log("¿Puede acceder al cine para mayores?");
console.log(esMayorDeEdad || tieneDNI); // basta con que cumpla una
