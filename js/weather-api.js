"use strict";


function weatherAPI(file) {
    return $.ajax({
        url: file
    });
}

var cityName = "nashville";

weatherAPI("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=59532cc55fafea3eb5fddb6e600206b8")
    .then((data) => {

// Converts temperatures from Kelvin to Farenheit:
        let kelvinToFarenheit = function(temp) {
            return Math.round((1.8 * (temp - 273) + 32));
        };

        let location = data.name; // Nashville
        let weatherDescription = data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1); // Description
        let simplifiedWeatherDescription = data.weather[0].main; // Main weather descriptions: Clear, Clear sky, Cloud, Few clouds, Broken clouds, Rain, Snow
        let maxTempFarenheit = kelvinToFarenheit(data.main.temp_max); // Max Temp Farenheit
        let minTempFarenheit = kelvinToFarenheit(data.main.temp_min); // Min Temp Farenheit

        console.log("Weather Data: ");
        console.log(data);
        console.log("Location: " + location);
        console.log("Description: " + weatherDescription);
        console.log("Main Description: " + simplifiedWeatherDescription);
        console.log("Max Temperature: " + maxTempFarenheit);
        console.log("Min Temperature: " + minTempFarenheit);

    });

module.exports = {weatherAPI};