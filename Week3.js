"use strict";
class Student {
    // Public Property
    name;
    // Private Property
    age;
    // Protected Property
    course;
    // Readonly Property
    country = "India";
    // Static Property
    static college = "Sri Vishnu Engineering College";
    // Constructor
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    // Method
    displayDetails() {
        console.log("----- Student Details -----");
        console.log("Name     :", this.name);
        console.log("Age      :", this.age);
        console.log("Course   :", this.course);
        console.log("Country  :", this.country);
        console.log("College  :", Student.college);
    }
}
// Inheritance
class Result extends Student {
    marks;
    constructor(name, age, course, marks) {
        super(name, age, course);
        this.marks = marks;
    }
    displayResult() {
        console.log("\n----- Student Result -----");
        console.log("Student Name :", this.name);
        console.log("Course       :", this.course);
        console.log("Marks        :", this.marks);
    }
}
// Object Creation
let s1 = new Result("Chandana", 19, "AIML", 95);
// Calling Methods
s1.displayDetails();
s1.displayResult();
