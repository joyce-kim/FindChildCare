var db = require("../models");

var userLog = require("../data/userData");

// PS202 email credentials
var hostName = "PS 202";
var hostEmail = "donotreply.ps202@gmail.com";
var hostPW = "teamps202";

// Set up emailjs package
var email = require("emailjs");
var server =  email.server.connect({
  user:     hostEmail,
  password: hostPW, 
  host:     "smtp.gmail.com", 
  ssl:      true
});

module.exports = function(app){

  //Get All Centers
  app.get("/api/all", function(req, res) {
    db.centers.findAll().then(function(results) {
        res.json(results);
      });
    //res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  // Get all user information submissions
  app.get("/api/log", function(req, res) {
    res.json(userLog);
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


  

  // Send email to both Center and User upon submission of user information
  app.post("/api/log", function(req, res) {

    userLog.push(req.body);

    var userName = req.body.userName;
    var userPhone = req.body.userPhone;
    var userEmail = req.body.userEmail;
    var userChild = req.body.userChild;
    var centerName = req.body.centerName;
    var centerEmail = req.body.centerEmail;
    var centerPOC = req.body.centerPOC;

    var messageToCenter  = {
      from:  hostName + " <" + hostEmail + ">", 
      to:    centerPOC + " <" + centerEmail + ">",
      subject: "Admittance Request",
      attachment: 
      [
        {data:"<html><h1>To " + centerPOC + " at " + centerName + ",</h1><p>A parent is in need of your assistance. Please contact the following parent/guardian in regards to having their child admitted into your center.</p><ul><li>Parent's Name: " + userName + "</li><li>Child's Age: " + userChild + "</li><li>Parent Phone: " + userPhone + "</li><li>Parent Email: " + userEmail +"</li></ul><p>Many thanks,<br>PS202</html>", alternative:true}
      ]
    };

    var messageToUser = {
       from:  hostName + " <" + hostEmail + ">", 
       to:    userName + " <" + userEmail + ">",
       subject: "PS202 Submit Receipt",
       attachment: 
       [
          {data:"<html><h1>Hi " + userName + ",</h1><p>Your information has been sent to " + centerPOC + " at " + centerName + " (" + centerEmail + "). Please await contact from the center via email or phone.<br><br>Best wishes,<br>PS202</p></html>", alternative:true}
       ]
    };


    server.send(messageToCenter, function(err, message) { console.log(err || message); });
    server.send(messageToUser, function(err, message) { console.log(err || message); });
    res.json(true);
  });
};