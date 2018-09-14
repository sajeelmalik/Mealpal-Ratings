//Sajeel Malik
//Create routing paths for the server using Express

var express = require("express");

var router = express.Router();

// Import the model (meal.js) to use its database functions
var meal = require("../models/meal.js");


router.get("/", function(req, res) {
    meal.selectAll(function(data) {
      var hbsObject = {
        meals: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/meals", function(req, res) {
    meal.insertOne([
      "name", "restaurant", "flavor_rating", "worth_it"
    ], [
      req.body.name, req.body.restaurant, req.body.flavor_rating, req.body.worth_it
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/meals/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    meal.updateOne({
      worth_it: req.body.worth_it
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/meals/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    meal.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  