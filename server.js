const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Lakshmi Priya",
        course: "Full Stack Development"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Student API"
    });
});

// GET Students
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// POST Student
app.post("/students", (req, res) => {

    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            message: "Name and Course are required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student Added Successfully",
        student: newStudent
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
