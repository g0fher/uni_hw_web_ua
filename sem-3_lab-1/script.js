let label_int = document.getElementById("int");
let label_string = document.getElementById("string");
let label_float = document.getElementById("float");
let label_bool = document.getElementById("boolean");


window.onload = function() {
    let answer_int = prompt("Integer: ");
    console.log(typeof answer_int);
    label_int.innerText = answer_int;

    let answer_string = prompt("String: ");
    console.log(typeof answer_string); 
    label_string.innerText = answer_string;

    let answer_float = prompt("Float: ");
    console.log(typeof parseFloat(answer_float)); 
    label_float.innerText = answer_float;

    let answer_bool = prompt("Boolean (true/false): ");
    console.log(typeof (answer_bool === 'true')); 
    label_bool.innerText = answer_bool === 'true';
};