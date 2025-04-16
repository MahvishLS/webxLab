const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.get("/", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

router.get("/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});

router.post("/", async (req, res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
});

router.put("/:id", async (req, res) => {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStudent);
});

router.delete("/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
});

module.exports = router;
