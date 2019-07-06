
     
     lat= 37.5780673;
     long=-77.5359137;
     
     
     var queryURL = "http://api.openchargemap.io/v3/poi/?output=json&latitude="+lat+"&longitude="+long+"&distance=5&distanceunit=miles&maxresults=15";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response[0].AddressInfo.Latitude)
        
    });


    var queryURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=dog&format=json&origin=*";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            
        
    });

    



    