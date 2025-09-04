class Person {
  #cellphone;
  constructor(firstname, lastname, age, height, weight, hobbies, cellphone) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;
    this.#cellphone = cellphone;
  }

  decirAdios() {
    console.log("Adiós desde este método!");
  }

  presentar() {
    console.log(
      `Hola, me llamo ${this.firstname} ${this.lastname}, tengo ${this.age} años, mido ${this.height}m y peso ${this.weight} kg. Mis hobbies son: ${this.hobbies.join(", ")}`
    );
  }

  showCellphone() {
    return this.#cellphone;
  }

  introduce() {
    console.log(`Soy ${this.firstname} ${this.lastname}, un ser humano normal.`);
  }
}

// Herencia
class Chef extends Person {
  constructor(firstname, lastname, age, height, weight, hobbies, cellphone, restaurant, favoriteFood) {
    super(firstname, lastname, age, height, weight, hobbies, cellphone);
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

  cook() {
    console.log(`${this.firstname} está cocinando ${this.favoriteFood}...`);
  }

  // Polimorfismo → sobrescribir el método "introduce"
  introduce() {
    console.log(`Soy el chef ${this.firstname}, trabajo en ${this.restaurant} 
      y mi comida favorita es ${this.favoriteFood}.`);
  }
}

// Crear objetos
let person1 = new Person("Noemi", "Alca", 18, 1.5, 53, ["leer", "jugar", "editar"], "981456789");
let chef1 = new Chef("Alfredo", "Alca", 18, 1.5, 53, ["cocinar", "comer"], "987654321", "La buena mesa", "pasta");

console.log("---- Persona ----");
person1.presentar();
console.log("Celular privado:", person1.showCellphone());

console.log("---- Chef ----");
chef1.presentar();
chef1.cook();

console.log("---- Polimorfismo ----");
person1.introduce(); 
chef1.introduce(); 
