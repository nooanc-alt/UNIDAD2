console.log("FUNCIONES");


function mostrarMensajes() {

  console.log("Inicio")
  console.log("Buenos dias");
  console.log(8);
  console.log("Noemi");
  console.log("Fin");
}


console.log("Reto 1");

function showNumbers() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  console.log(10);
}











function addTwoNumbers(x, y) {
  console.log(`Primer parámetro: ${x}`);
  console.log(`Segundo parámetro: ${y}`);
  
  let result = x + y;
  console.log(`El resultado de ${x} + ${y} : ${result}`);
}

let num1 = 30;
let num2 = 8;

console.log("RETORNO DE VALORES")

addTwoNumbers(num1, num2);


function greet (targetName) {
    let message = `Hola ${targetName}, buen día.`;
    return message;
}

let name = 'Noemi';
let greetMessage = greet(name) ;
console.log(greetMessage);
console.log(greet(name));

function despedida (nombre) {
    let mensaje = `Adiós ${nombre}, que te vaya bien.`;
    return mensaje;
}
console.log(despedida('Noemi'));
console.log(despedida());

console.log("ARROW FUNCTIONS")

let value1 = 12;
let value2 = 2;

let multiplyTwoNumbers = (a, b) => {
  console.log(`Factor 1 -> ${a}`);
  console.log(`Factor 2 -> ${b}`);

  let result = a*b;
  let message = `${a} x ${b} = ${result}`;

  return message;
};

console.log(multiplyTwoNumbers(value1, value2));