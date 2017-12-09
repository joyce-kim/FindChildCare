var map;
var markers = [];

  function populateMarkers(results) {
    for (var i = 0; i < results.length; i++) {
      var lng = results[i].X;
      var lat = results[i].Y;
      var name = '<h4>' + results[i].NAME +'</h4>'+
                '<p>' + results[i].ADDRESS + '</p>' +
                "<p>POC: " + results[i].POC + "</p>"+
                "<p>" + results[i].PHONE + "</p>" +
                "<p>Tier: " + results[i].TIER_NAME + "</p>" +
                "<button class='delete' data-id='" + results[i].EMAIL + "'>SEND EMAIL</button>"
      var latLng = new google.maps.LatLng(lat,lng);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
       markers.push(marker);

       map.setCenter({
        lng: parseFloat(results[1].X),
        lat: parseFloat(results[1].Y)
      });
      console.log(name);
      
      var infowindow = new google.maps.InfoWindow()
      google.maps.event.addListener(marker,'click', (function(marker,name,infowindow){ 
      return function() {
        infowindow.setContent(name);
        infowindow.open(map,marker);
    };
})(marker,name,infowindow));

    }
  }

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
    //renderCenters(data);
    clearMarkers();
    populateMarkers(data);


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
      div.append("<button id='email-button" + i + "' type='button' data-toggle='modal' data-target='#emailModal' class='email-buttons delete btn' data-email='" + data[i].EMAIL + "' data-name='" + data[i].NAME + "' data-poc='" + data[i].POC + "' data-phone='" + data[i].PHONE + "'>SEND EMAIL</button>");
     
      $("#stats").append(div);

    }

  }

    $(".email-buttons").on("click", function(event) {
      event.preventDefault();

      var centerName = $(this).attr("data-name");
      var centerPOC = $(this).attr("data-poc");
      var centerEmail = $(this).attr("data-email");
      var centerPhone = $(this).attr("data-phone");

      $("#insert-centername-here").html(centerName);
      $("#insert-centername-here").attr("center-name", centerName);
      $("#insert-centername-here").attr("center-poc", centerPOC);
      $("#insert-centername-here").attr("center-email", centerEmail);
      $("#insert-centername-here").attr("center-phone", centerPhone);
    });
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}

function initMap() {
                      
    // var uluru = {lat: 38.94284836, lng: -76.99696369};
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(38.94284836,-76.99696369),
    mapTypeID: 'terrain'
    });
    

  };
    
            

