
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    $('#option').on("change", function (event) {
        event.preventDefault();
        console.log($("#option").val());
        console.log($(this).val().substring(0, 2));

        var range = $("#option").val();
        console.log(range)
        var lat = position.coords.latitude;
        console.log(lat);
        var long = position.coords.longitude;
        console.log(long);




        var queryURL = "http://api.openchargemap.io/v3/poi/?output=json&latitude=" + lat + "&longitude=" + long + "&distance=" + range + "&distanceunit=miles&maxresults=30";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response[0].AddressInfo.Latitude)
            console.log(response[0].AddressInfo.Longitude)
        });


    });
};
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

getLocation();
initMap();

