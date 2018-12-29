var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");

var app = express();

app.set("view engine", "ejs"); // Установка шаблонизатора ejs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //Отдача css, js, images

app.use(
  "/javascripts",
  express.static(path.join(__dirname, "node_modules", "jquery", "dist"))
); //Добавление jquery

app.get("/", function(req, res) {
  res.render("index");
});

module.exports = app;
