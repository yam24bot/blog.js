var express = require("express");

var app = express();

var bodyParser = require("body-parser");

app.set("view engine", "ejs"); // Установка шаблонизатора ejs
app.use(bodyParser.urlencoded({ extended: true }));

const arr = ["hello", "world", "test"];

app.get("/", function(req, res) {
  res.render("index", { arr: arr });
});

app.get("/create", function(req, res) {
  res.render("create");
});

app.post("/create", function(req, res) {
  arr.push(req.body.text);
  res.redirect("/");
});

module.exports = app;
