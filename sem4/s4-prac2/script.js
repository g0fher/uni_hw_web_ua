"use strict";

// 2.1
function greet() { 
    console.log("Привіт, світ!"); 
} 
greet(); 

// 2.2
const multiply = function(a, b) { 
    return a * b; 
}; 
console.log(multiply(4, 5));

// 2.3
const divide = (a, b) => a / b;
console.log(divide(20, 4));

// 3.1
function square(x) { 
    return x * x; 
} 
console.log(square(6));

// 3.2
if (true) { 
    let localVar = "Я в блоці"; 
    console.log(localVar);
}
// console.log(localVar);

// 4.1
function createCounter() { 
    let count = 0; 
    return function() { 
        count++; 
        return count; 
    }; 
} 
const counter = createCounter(); 
console.log(counter()); 
console.log(counter());
console.log(counter());

// 4.2
const person = { 
    name: "Steve", 
    sayHello() { 
        console.log(`I.. am ${this.name}!`); 
    } 
}; 
person.sayHello();

// 4.3
function add(a) { 
    return function(b) { 
        return a + b; 
    }; 
} 
const addTen = add(40); 
console.log(addTen(5));

// 5.1
function createSurvey() {
    let name = prompt("name");
    
    const adultAge = 18;
    let age = parseInt(prompt("age"));
    if (age <= 0) {
        console.log("Invalid age");
        return(-1);
    }
    else if (age < adultAge) {
        console.log("Too young, bad luck");
        return(-1);
    }
    
    let city = prompt("city");

    let personObject = {};
    return (personObject = {
        name: name,
        age: age,
        city: city
    });
}

function displaySurvey(personObject) {
    alert(`
        Name: ${personObject.name}\n
        Age: ${personObject.age}\n
        City: ${personObject.city}`
    );
    console.log(personObject.name, personObject.age, personObject.city);
}

const personObject = createSurvey();
if (personObject != -1) {
    displaySurvey(personObject);
}


// 5.2 (wtf?)
function createConverter(factor, offset) {
    return function(valueToConvert) {
        return valueToConvert * factor + offset;
    };
}

const fahrenheitToCelsius = createConverter(5 / 9, -32 * 5 / 9);
const celsiusToFahrenheit = createConverter(9 / 5, 32);

let direction = 0;

while (true) {
    direction = parseInt(prompt("Select converter, 1 if F to C, 2 if C to F"));
    
    if (direction == 1 || direction == 2) {
        console.log(`Selected converter ${direction}`)
        break;
    }
    else {
        console.log("Bad direction, try again")
    }
}

let conversationResult = 0;

let temperature = parseFloat(prompt("temperature to convert"));
if (direction == 1) {
    conversationResult = fahrenheitToCelsius(temperature);
}
else if (direction == 2) {
    conversationResult = celsiusToFahrenheit(temperature);
}

alert("Result: " + conversationResult.toFixed(2));
console.log("Result: " + conversationResult.toFixed(2));
