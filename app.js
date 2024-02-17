const express = require("express");
const path = require("path");
const app = require("./server");
require("./src/db/conn");

const static_path = path.join(__dirname, "/public");

app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("Hii this is vinay");
});
