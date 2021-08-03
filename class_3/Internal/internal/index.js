"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/internal", (req, res) => {
  console.log("Internal service new request");
  res.send(
    JSON.stringify({
      a: 1,
      b: 2,
    })
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
