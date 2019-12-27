/**
 * @file : server.js
 * @auther
 */

const express = require("express");
const dotenv = require("dotenv");
const routes = require("./src/routes")
dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Its alive" });
});

app.use('/api', routes)

app.listen(5000, () => {
  console.log("app running on port ", 5000);
});
