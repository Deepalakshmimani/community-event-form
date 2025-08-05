const express = require("express");
const app = express();
const db = require("./db");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 

// Handle form POST request
app.post("/register", (req, res) => {
  const { name, email, phone, age, gender, category, notes } = req.body;
  const sql = "INSERT INTO registrations (name, email, phone, age, gender, category, notes) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, email, phone, age, gender, category, notes], (err) => {
    if (err) return res.status(500).send("Error saving data");
    res.send("Success");
  });
});

// Get all members
app.get("/members", (req, res) => {
  db.query("SELECT * FROM registrations", (err, results) => {
    if (err) return res.status(500).send("Error fetching data");
    res.json(results);
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
