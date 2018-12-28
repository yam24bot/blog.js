var express = require("express");
var bodyParser = require("body-parser");

const Post = require("./models/post.js");

var app = express();

app.set("view engine", "ejs"); // Установка шаблонизатора ejs
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  Post.find({}).then(posts => {
    res.render("index", { posts: posts });
  });
});

app.get("/create", function(req, res) {
  res.render("create");
});

app.post("/create", function(req, res) {
  const { title, body } = req.body; //Рестукуризация

  Post.create({
    title: title,
    body: body
  }).then(post => console.log(post.id));
  res.redirect("/");
});

module.exports = app;
