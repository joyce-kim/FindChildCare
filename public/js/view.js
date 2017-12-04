var map;


// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the zip they typed into the book-search input
  var zipSearched = $("#zipcode-search").val().trim();

 // Make an AJAX get request to our api, including the user's zip in the url
  $.get("/api/" + zipSearched, function(data) {

    console.log(zipSearched);
    var a=[];
    a.push(data);
    console.log(a);
    console.log(data);
    renderCenters(data);

  });

});

function renderCenters(data) {

  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

  for (var i = 0; i < data.length; i++) {
      var div = $("<div>");

      div.append("<h2>" + data[i].NAME + "</h2>");
      div.append("<p>Address: " + data[i].ADDRESS + "</p>");
      div.append("<p>POC: " + data[i].POC + "</p>");
      div.append("<p>Phone: " + data[i].PHONE + "</p>");
      div.append("<p>Tier: " + data[i].TIER_NAME + "</p>");
      div.append("<button class='delete' data-id='" + data[i].EMAIL + "'>SEND EMAIL</button>");
     
      $("#stats").append(div);

    }

  }
}

function initMap() {
                      
    var uluru = {lat: 38.94284836, lng: -76.99696369};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
    });
    var marker = new google.maps.Marker({
    position: uluru,
    map: map
    });
};
            

