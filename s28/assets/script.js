
function imprimirNumeros() {

  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Llamar a la funcion
imprimirNumeros();














function addTwoNumbers(x, y) {
  console.log(`Primer parámetro: ${x}`);
  console.log(`Segundo parámetro: ${y}`);
  
  let result = x + y;
  console.log(`El resultado de ${x} + ${y} : ${result}`);
}

let num1 = 30;
let num2 = 8;
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