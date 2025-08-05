const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "deepasql@2025", // replace with your MySQL root password
  database: "eventdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

module.exports = connection;
