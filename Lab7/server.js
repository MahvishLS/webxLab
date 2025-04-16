require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
