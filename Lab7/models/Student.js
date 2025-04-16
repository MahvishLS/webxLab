const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    roll_no: { type: Number, required: true, unique: true },
    class_name: { type: String, required: true }
});

module.exports = mongoose.model("Student", studentSchema);
