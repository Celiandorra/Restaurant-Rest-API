const express = require("express");
const { Pool } = require("pg");



// Create an Express application
const app = express();
const port = 3000;

var cors = require("cors");
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Set up a connection pool to the PostgreSQL database
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "FoodFindr_db",
  password: "0000",
  port: 5432,
});

// Define a route to fetch data from the "restaurants" table
app.get("/restaurants", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query("SELECT * FROM restaurants");

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
