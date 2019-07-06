
        var queryURL = "http://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10";
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

    



    