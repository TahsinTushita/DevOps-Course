"use strict";

const express = require("express");

// Constants
const PORT = 8081;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/service2", (req, res) => {
  console.log("service 2 new request");
  res.send("Service 2 data");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
