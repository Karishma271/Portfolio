const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const dbUrl = "mongodb+srv://portfolio:portfolio@cluster0.z48gg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(dbUrl);

const app = express();
const port = process.env.PORT || "8888";

// Middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Connect to MongoDB and ensure connection is ready before handling requests
async function connection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("Portfolio");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
}

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
  // Or you can render a Pug template if you have one:
  // res.render('index', { title: 'Home' });
});

// API Endpoints
app.get('/api/projects', async (req, res) => {
  try {
    const db = await connection();
    const results = await db.collection("projects").find({}).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching projects", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    const db = await connection();
    const results = await db.collection("skills").find({}).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching skills", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// Handle termination to close the MongoDB connection
process.on('SIGINT', async () => {
  console.log("Closing MongoDB connection");
  await client.close();
  process.exit(0); // Exit process with success
});
