// 2.1, 2.2
const planet = {
    name: "Arrakis",
    owner: "House Harkonnen",
    displayInfo() {
        console.log(`Planet ${this.name}, owned by ${this.owner}`);
    } 
};
planet.displayInfo();

// 3.1
function Person(name, age) { 
    this.name = name; 
    this.age = age; 
} 
const person1 = new Person("Paul Atreides", 17); 
console.log(person1); 

Person.prototype.greet = function() { 
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`); 
}; 
person1.greet();

// 3.2
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
} 
const person2 = new Person2("Paul Atreides", 17); 
console.log(person1); 

person2.greet();


// 3.3
class UserA { 
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() { return this._name; }
    set name(newName) {
        if (newName) {
            this._name = newName;
        }
    }

    get age() { return this._age; }
    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        }
    }

    display() {
        console.log(`Користувач: ${this._name}, Вік: ${this._age}`);
    }
} 
const user1 = new UserA("Марія", 30);
user1.display();
user1.name = "Оксана";
user1.age = 32;
user1.display();


// 4.1 & 4.2
class User { 
    constructor(name, age, profesion) {
        this._name = name;
        this._age = Number(age);
        this._profesion = profesion;
    }

    get name() { return this._name; }
    set name(setName) {
        if (setName) {
            this._name = setName;
        }
    }

    get age() { return this._age; }
    set age(setAge) {
        setAge = Number(setAge)
        if (setAge >= 0) {
            this._age = setAge;
        }
    }

    get profesion() { return this._profesion; }
    set profesion(setProfesion) {
        if (setProfesion) {
            this._age = setProfesion;
        }
    }

    display() {
        console.log(`User. Name: ${this._name}, Age: ${this._age}, Profesion: ${this._profesion}`);
    }
}

const testSubjectRunner = new User("Test Subject", 22, "Runner");
testSubjectRunner.display()

// Тут відбувається наслідування
class Admin extends User {
    // а це поле є приватним, отже можна сказати що це інкапсуляція, бо його не можна змінити ззовні
    #password;
    constructor(name, age, profesion, password) {
        super(name, age, profesion);
        this.#password = password;
    }

    // тут фактично поліморфізм і перевизначення також на методі дисплей, бо два класи мають однаковий метод
    // який поводиться по різному 
    display() {
        console.log(`Admin. Name: ${this._name}, Age: ${this._age}, Profesion: ${this._profesion}`);
    }

    // це теоретично можна назвати абстракцією, бо неважливо як саме хакається пароль
    hackPassword() {
        console.log(`Executing... [Database breached] /// Password of ${this._name} is "${this.#password}"`)
    }
}

const adminEntity = new Admin("GLaDOS", NaN, "AI", "potato");
adminEntity.display();
adminEntity.hackPassword();