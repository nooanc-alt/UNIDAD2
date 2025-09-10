let bebidas = ["Coca-Cola", "Inkakola", "Guarana", "Sprite", "Agua"];
console.log(bebidas);

bebidas.push("Inkakola");

console.log(bebidas);

bebidas.pop();

console.log(bebidas);

bebidas.pop();

console.log(bebidas);

let lastItem = bebidas.pop();
console.log(bebidas);

console.log("unshift");
bebidas.unshift("Agua");
console.log(bebidas);

console.log("shift");
bebidas.shift();
console.log(bebidas);


bebidas. shift();
console.log(bebidas);
console. log("includes");

console. log(bebidas.includes("Coca-Cola")); // true
console. log(bebidas.includes("Sprite")); // false
console. log("indexOf");


console. log(bebidas.indexOf("Coca-Cola"));
console. log(bebidas. indexOf("cafe"));
console.log(bebidas.indexOf("Vino"));

console.log("join");
let bebidasString = bebidas.join();
console.log(bebidasString);


console.log(bebidas.join("."));
console.log(bebidas.join("-"));
console.log(bebidas.join(" "));
console.log(bebidas.join(""));

let randomArray = ["Hola", 20, 87.4, null, undefined, "Mundo"];
console.log(randomArray.join());


console.log("=================================");

bebidas = ["Coca-Cola", "Inkakola", "Guarana", "Sprite", 
"Agua"];

console.log("ARREGLO ORIGINAL");
console.log(bebidas);

console.log("slice");



let slicedBebidas = bebidas.slice(3);
console.log(slicedBebidas);

console.log(bebidas.slice(1, 4));



console.log("splice");

bebidas.splice(2, 4, "Fanta", "Pepsi", "7UP");
console.log(bebidas);


console.log("=================================");

let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums);

let numMap = nums.map((x) => x * 2);
console.log(numMap);

let numsToString = nums.map((x) => `Numero ${x}`);
console.log(numsToString)


let filteredNums = nums.filter((x) => x % 2 === 0);
console.log(filteredNums);


let productOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(productOfAllElements);

console.log("=================================");
console.log("Objeto math");

console.log("Math.round()");


console.log(Math.round(15.8));
console.log(Math.round(15.3));

console.log("Math.ceil()");

console.log(Math.ceil(15.8));


console.log("Math.floor()");

console.log(Math.floor(15.8));