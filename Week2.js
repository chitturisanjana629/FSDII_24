"use strict";
// Week 2 Lab Program
// Function with types
function add(a, b) {
    return a + b;
}
// Optional parameter
function greet(name, city) {
    if (city) {
        console.log("Hello " + name + " from " + city);
    }
    else {
        console.log("Hello " + name);
    }
}
// Default parameter
function student(name, age = 18) {
    console.log("Student:", name);
    console.log("Age:", age);
}
// Arrow function
const multiply = (a, b) => {
    return a * b;
};
// REST parameter
function findSum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Addition =", add(10, 20));
greet("Sandeep");
greet("Sandeep", "Vijayawada");
student("Rahul");
student("Anjali", 21);
console.log("Multiplication =", multiply(5, 6));
console.log("REST Sum =", findSum(10, 20, 30, 40, 50));
