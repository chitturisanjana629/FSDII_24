"use strict";
// WEEK 4 - Namespace, Modules and Generics
// Namespace
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Calculator.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    Calculator.multiply = multiply;
})(Calculator || (Calculator = {}));
// Using Namespace
console.log("Addition       :", Calculator.add(10, 20));
console.log("Subtraction    :", Calculator.subtract(20, 5));
console.log("Multiplication :", Calculator.multiply(5, 6));
// Generic Variable
let numbers = [10, 20, 30, 40];
let names = ["Sandeep", "Rahul", "Anjali"];
console.log();
console.log("Numbers :", numbers);
console.log("Names   :", names);
// Generic Function
function display(value) {
    return value;
}
console.log();
console.log(display(100));
console.log(display("TypeScript"));
console.log(display(true));
function printLength(item) {
    console.log("Length :", item.length);
}
printLength("Programming");
printLength([10, 20, 30, 40]);
// Export and Import Modules
/*
Create file: math.ts

export function square(x:number):number{
    return x*x;
}

export function cube(x:number):number{
    return x*x*x;
}

----------------------------------

Create file: app.ts

import {square,cube} from "./math";

console.log(square(5));
console.log(cube(5));

Compile:

tsc math.ts
tsc app.ts

Run:

node app.js
*/ 
