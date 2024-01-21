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

// register user
app.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const result = await pool.query(
      "INSERT INTO users (username, pword, email) VALUES ($1, $2, $3) RETURNING *",
      [username, password, email]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// login user
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND pword = $2",
      [username, password]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// vegetarian food
app.get("/restaurants/vegetarian", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where vegetarian_friendly = 'Yes' "
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// vegan food
app.get("/restaurants/vegan", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where vegan = 'Yes' "
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// lactose free food
app.get("/restaurants/lactosefree", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where lactosefree = 'Yes' "
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// gluten free food
app.get("/restaurants/glutenfree", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where glutenfree = 'Yes' "
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// halal food
app.get("/restaurants/halal", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where halal = 'Yes' "
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// seafood food
app.get("/restaurants/seafood", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where dishes_type ='Seafood' "
    );

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

// asian food
app.get("/restaurants/asian", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where dishes_type IN ('Japanese','Chinese','Korean','Thai','Vietnamese','Indian','Malaysian','Indonesian','Filipino','Sri Lankan','Burmese','Cambodian','Laotian','Nepalese','Singaporean','Taiwanese','Tibetan')"
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// italian food
app.get("/restaurants/italian", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where dishes_type = 'Italian'"
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// palestinian food
app.get("/restaurants/palestinian", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where dishes_type = 'Palestinian'"
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// american food
app.get("/restaurants/american", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where dishes_type = 'American'"
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// mexican food
app.get("/restaurants/mexican", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where dishes_type = 'Mexican'"
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// tunisian food
app.get("/restaurants/tunisian", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where dishes_type = 'Tunisian'"
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

// mediterranean food
app.get("/restaurants/mediterranean", async (req, res) => {
  try {
    // Query the database to retrieve data from the "restaurants" table
    const result = await pool.query(
      "SELECT * FROM restaurants where dishes_type IN ('Tunisian', 'Italian', 'Lebanese', 'Spanish','Greek','Egyptian','Syrian','Algerian','Moroccan')"
    );

    // Send the fetched data as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});
