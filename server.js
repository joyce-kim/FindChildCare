var request = require("request");

request("https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/33/query?where=1%3D1&outFields=*&outSR=4326&f=json", function(error, response, body) {

  if (!error && response.statusCode === 200) {
  	console.log(JSON.parse(body).features);
    // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});
