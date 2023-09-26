const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/data", async (req, res) => {
  // Extract query parameters from the URL
  const name = req.query.name;
  const email = req.query.email;
  const phone = req.query.phone;

  // Replace with your Google Apps Script Web App URL

  const appsScriptUrl = process.env.URL;

  try {
    // Send an HTTP POST request to your Google Apps Script with the extracted data
    const response = await axios.post(appsScriptUrl, { name, email, phone });
    res
      .status(200)
      .send("POST request sent successfully to Google Apps Script.");
  } catch (error) {
    console.error("Error sending POST request:", error);
    res.status(500).send("Error sending POST request to Google Apps Script.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // console.log(typeof process.env.URL);
});
