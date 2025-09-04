class person { #cellphone;
    constructor(firstname, lastname, age, heigth, weight, hobbies, cellphone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.heigth = heigth;
        this.weight = weight;
        this.hobbies = hobbies;
        this.#cellphone = cellphone;
    }
    decirAdios() {
        console.log("Adios desde este metodo!");
}
presentar(){
    console.log(
        `Adios, me llamo ${this.firstname} ${this.
        lastname}, tengo ${this.age} años, mido ${this.heigth} y peso ${this.weight} kg. Mis hobbies son: ${this.hobbies}`);
}
showCellphone(){
    return this.#cellphone;
}
}

let person1 = new person("Noemi", "Alca", 18, 1.50, 53, [
    "leer", "jugar", "editar",
],"981456789");


console.log(person1);
console.log(person1.firstname);
console.log(person1.hobbies);
console.log("METODOS");
person1.decirAdios();
person1.presentar();
console.log(person1.showCellphone());

class chef extends person {
    constructor(
        firstname, 
        lastname, 
        age, 
        heigth, 
        weight, 
        hobbies, 
        cellphone, 
        restaurant,
        favoriteFood
    ) {
        super(firstname, lastname, age, heigth, weight, hobbies, cellphone);
        this.restaurant = restaurant;
        this.favoriteFood = favoriteFood;
    }

    cook() {
        console.log(`${this.firstname} está cocinando ${this.favoriteFood}...`

        );
    }
}
let chef1 = new chef(
    "Alfredo", "Alca", 18, 1.50, 53, ["cocinar", "comer"], "987654321", "La buena mesa", "pasta"
)