var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/rockPaperScissors", function(req, res) {
  res.render("rockPaperScissors");
});

app.get("/lizardSpock", function(req, res) {
  res.render("lizardSpock");
});

app.listen(3000, function() {
  console.log("server going");
});
