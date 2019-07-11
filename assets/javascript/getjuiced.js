
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
        var data;
        //var town;
        //var state;



        var queryURL = "https://api.openchargemap.io/v3/poi/?output=json&latitude=" + lat + "&longitude=" + long + "&distance=" + range + "&distanceunit=miles&maxresults=50";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response[0].AddressInfo.Latitude)
            console.log(response[0].AddressInfo.Longitude)
            data = response;
            initMap(lat, long, data);
        });



    });

};


function addMarker(data) {
    for (var i = 0; i < data.length; i++) {
        var contentString = "<div id='content'><h5>" + data[i].AddressInfo.Title + "</h5><p>" + data[i].AddressInfo.AddressLine1 + "<br>" + data[i].AddressInfo.Town + "<br>" + data[i].AddressInfo.StateOrProvince + "</p></div>";
        var pos = new google.maps.LatLng(data[i].AddressInfo.Latitude, data[i].AddressInfo.Longitude)
        const marker = new google.maps.Marker({
            position: pos,
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        marker.addListener('click', function () {
            infowindow.open(marker.get('map'), marker);
             town2 = data[i].AddressInfo.Town ;
             state2 = data[i].AddressInfo.StateOrProvince;
            snip(town2, state2);
        });
    };

};

function initMap(lat, long, data) {
    var location = { lat: lat, lng: long };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location

    });
    addMarker(data);
};


/*function format(){
    return letters === "AL" ? "Alabama" :
    return letters === "AK" ? "Alaska" :
    return letters === "AZ" ? "Arizona":
    return letters === "AR" ? "Arkansas":
    return letters === "CA" ? "California":
    return letters === "CO" ? "Colorado":
    return letters === "CT" ? "Connecticut":
    return letters === "DE" ? "Delaware":
    return letters === "FL" ? "Florida":
    return letters === "GA" ? "Georgia":
    return letters === "HI" ? "Hawaii":
    return letters === "ID" ? "Idaho":
    return letters === "IL" ? "Illinois":
    return letters === "IN" ? "Indiana":
    return letters === "IA" ? "Iowa":
}*/

function snip(town2,state2) {
    var queryURL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext=1&titles="+ town2 +"," + state2;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
};
$(document).ready(function () {
    getLocation();
});



