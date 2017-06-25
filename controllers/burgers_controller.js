var express = require("express");
var routes = express.Router();


var burger = require("../models/burger.js");


routes.get("/", function(req, res) {
  burger.all(function(data) {
    var object = {
      burgers: data
    };

    res.render("index", object);
  });
});

routes.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured", "date"
  ], [
    req.body.burger_name, req.body.devoured, req.body.date
  ], function() {
    res.redirect("/");
  });
});

routes.put("/:id", function(req, res) {
  var id = "id = " + req.params.id;

  burger.update({
    devoured: req.body.devoured
  }, id, function() {
    res.redirect("/");
  });
});


module.exports = routes;