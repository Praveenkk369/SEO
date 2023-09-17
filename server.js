const express = require("express");
const bodyParser = require("body-parser"); // Middleware for parsing JSON request bodies

const app = express();
const port = process.env.PORT || 3000; // Use port 3000 by default

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a route for handling POST requests
app.post("/dataforseo", async (req, res) => {
  try {
    // Extract data from the request body
    const { target } = req.body; // Assuming you expect a "target" field

    // Perform actions with the DataForSEO API here
    // Example: Make requests to DataForSEO API, process responses

    // Send a response
    res.json({ message: "Request received successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
