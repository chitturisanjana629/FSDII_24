const express = require("express");

const app = express();
const PORT = 3001;

// Parse JSON request body
app.use(express.json());

// --------------------------------------
// CUSTOM MIDDLEWARE - REQUEST LOGGER
// --------------------------------------

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

// --------------------------------------
// SAMPLE DATA
// --------------------------------------

let students = [
    {
        id: 1,
        name: "Sanjana",
        course: "FSD"
    },
    {
        id: 2,
        name: "akhila",
        course: "AI"
    }
];

// --------------------------------------
// GET - READ STUDENTS
// --------------------------------------

app.get("/students", (req, res) => {
    res.json(students);
});

// --------------------------------------
// GET - GET ONE STUDENT
// --------------------------------------

app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// --------------------------------------
// POST - CREATE STUDENT
// --------------------------------------

app.post("/students", (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(student);

    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});

// --------------------------------------
// PUT - UPDATE STUDENT
// --------------------------------------

app.put("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// --------------------------------------
// DELETE - DELETE STUDENT
// --------------------------------------

app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

// --------------------------------------
// START SERVER
// --------------------------------------

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
