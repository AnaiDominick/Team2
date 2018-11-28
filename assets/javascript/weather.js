var APIKey = "166a433c57516f51dfab1f7edaed8413";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Monterrey, MX," + "Burundi&units=imperial&appid=" + APIKey;


//"https://api.openweathermap.org/data/2.5/weather?q=Monterrey,MX,Burundi&units=imperial&appid=166a433c57516f51dfab1f7edaed8413
$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function (response) {
        console.log(queryURL);
        console.log(response);

        $("#city").html("<h1>" + response.name + " Weather Details</h1>");
        $("#wind").text("Wind Speed: " + response.wind.speed + " m/s");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#temp").text("Temperature (F) " + response.main.temp);
        $("#coordenates").text("Coordenates " + + response.coord.lon + ", " + "lat: " + response.coord.lat);

        console.log("Wind Speed: " + response.wind.speed + " m/s");
        console.log("Humidity: " + response.main.humidity + "%");
        console.log("Temperature (F): " + response.main.temp);
        console.log("Coordenates: " + "lon: " + response.coord.lon + ", " + "lat: " + response.coord.lat);
    });