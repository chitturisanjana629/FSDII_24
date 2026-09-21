"use strict";
let studentName = "Chandana";
let studentAge = 19;
let isPresent = true;
console.log("Student Name Data Type: " + typeof studentName);
console.log("Student Age Data Type: " + typeof studentAge);
console.log("Attendance Data Type: " + typeof isPresent);
function displayStudent(name, age, present) {
    console.log("\nStudent Details");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Present: " + (present ? "Yes" : "No"));
}
displayStudent(studentName, studentAge, isPresent);
// Week 1 - Experiment 2
// Special Types: any, unknown, void
// any type
let course = "TypeScript";
console.log("Course:", course);
course = 2026;
console.log("Updated Course:", course);
course = false;
console.log("Boolean Value:", course);
// unknown type
let inputValue = "Full Stack Development";
if (typeof inputValue === "string") {
    console.log("String Length:", inputValue.length);
}
// void type
function displayAlert(message) {
    console.log("Notification: " + message);
}
displayAlert("Experiment Completed Successfully");
// Variable Annotations
let movieName = "Baahubali: The Beginning";
let releaseYear = 2015;
let hitMovie = true;
// Function with Parameter and Return Type Annotations
function getMovieDetails(name, year) {
    return `${name} was released in ${year} and became a huge success.`;
}
// Array Annotation
let cast = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
// Display Output
console.log(getMovieDetails(movieName, releaseYear));
console.log("Main Cast: " + cast.join(", "));
console.log("Blockbuster Status: " + (hitMovie ? "Yes, Super Hit!" : "No"));
// Type Safety Example
// movieName = 2025; // Error: Type 'number' is not assignable to type 'string'
