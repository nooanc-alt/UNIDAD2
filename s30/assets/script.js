// let name = prompt("Ingresa tu nombre");

// console.log('Buenas noches ${name}');

let num1 = parseInt(prompt("8"));

let num2 = parseInt(prompt("7"));

console.log(`${num1} + ${num2} = ${num1 + num2}`);

let num3 = 7;
let num4 = 15;
if (num3 > num4) {
    console.log(`${num3} es mayor que ${num4}`);
} else if (num3 < num4) {
    console.log(`${num3} es menor que ${num4}`);
} else {
    console.log(`${num3} es igual que ${num4}`);
}

RETO
// Crea un programa que pida un numero entero al usuario e
// indique si este numero es par o no
let num = parseInt(prompt("Ingresa un numero"));
if (num % 2 === 0) {
    console.log(`${num} es par.`);
} else {
    console.log(`${num} es impar.`); 
}
// condicional mayor de edad //
let edad = parseInt(prompt("Ingresa tu edad"));

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
