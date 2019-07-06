
lat = 37.5780673;
long = -77.5359137;


var queryURL = "http://api.openchargemap.io/v3/poi/?output=json&latitude=" + lat + "&longitude=" + long + "&distance=5&distanceunit=miles&maxresults=15";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response[0].AddressInfo.Latitude)
    console.log(response[0].AddressInfo.Longitude)
});

$('#option').on("click", function (event) {
    event.preventDefault();
    console.log($(this).val().substring(0, 2));
});



var town = "";

var queryURL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext=1&titles=" + town;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);


});

function initMap() {
    var location = { lat: 37.5780673, lng: -77.5359137 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
}




