const express = require("express");
const server = express();

server.listen("3000");

server.get("/teste", (req, res) => {
  console.log("Hello World");
});
