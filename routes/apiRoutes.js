var db = require("../models");

module.exports = function(app){

  //Get All Centers
  app.get("/api/all", function(req, res) {
    db.centers.findAll().then(function(results) {
        res.json(results);
      });
    //res.sendFile(path.join(__dirname, "../public/results.html"));
  });
  // Get Centers in zipcode provided
  app.get("/api/:zipSearched", function(req, res) {
    if (req.params.zipSearched) {
      db.centers.findAll({
        where: {
          ZIPCODE: req.params.zipSearched
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });
};