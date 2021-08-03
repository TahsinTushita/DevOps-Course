"use strict";

const express = require("express");
const axios = require("axios");

// Constants
const PORT = 8081;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const internalURL = "http://172.17.0.2:8080/api/v1/internal";

app.get("/api/v1/add", async (req, res) => {
  try {
    const response = await axios.get(internalURL);
    res.send(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
