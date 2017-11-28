var path = require("path");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/results", function(req, res) {
    db.centers.findAll().then(function(result){
      res.send({data: result});
    });
    //res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};