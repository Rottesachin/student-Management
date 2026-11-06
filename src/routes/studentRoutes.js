
const express = require("express");
const router = express.Router();

const pool = require("../config/db");

//GET all students
router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM students");

        res.json({
            message: "Students retrieved successfully",
            students: result.rows
        });

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: "Failed to retrieve students"
        });
    }
});
// Add a new student
router.post("/", async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const result = await pool.query(
            "INSERT INTO students (name, email, age) VALUES ($1, $2, $3) RETURNING *",
            [name, email, age]
        );

        res.status(201).json({
            message: "Student added successfully",
            student: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to add student"
        });
    }
});

module.exports = router;
