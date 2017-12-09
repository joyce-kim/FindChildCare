var path = require("path");

var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/results", function(req, res) {
    db.centers.findAll().then(function(results) {
        res.json(results);
      });
    //res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  // If no matching route is found default to home
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  // Get form page
  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form.html"));
  });
};