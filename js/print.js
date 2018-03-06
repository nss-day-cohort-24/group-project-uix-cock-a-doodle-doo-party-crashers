"use strict";

let $ = require('../lib/node_modules/jquery');
let articlesArray = [];
let counter = 0;
let fetchModule = require("./fetch");
let getBooks = fetchModule.getBooks;

 
function getNews() {
    return $.ajax({
        url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=019498fb2ac9480893b5eec1134d9a6c`,
    }).done((newsData) => {
        console.log("news Data call", newsData);
        return newsData;
   });
}

function printNews(div){
    getNews()
   .then((newsData) => {
       let articles = newsData.articles;

       for(var i = 0; i < 10; i++){
            $('#print').append(`<li><a target="_blank" href="${articles[i].url}">${articles[i].title}</a></li>`);
    }
});
}
         
// ====WeatherAPI Start===========================================================

function weatherAPI(file) {
    return $.ajax({
        url: file
    });
}

var zipCode = "37205";

weatherAPI("http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&appid=59532cc55fafea3eb5fddb6e600206b8")
    .then((data) => {

    // Converts temperatures from Kelvin to Farenheit:
    let kelvinToFarenheit = function(temp) {
        return Math.round((1.8 * (temp - 273) + 32));
    };
console.log(data);
    let location = data.name; // Nashville
    let weatherDescription = data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1); // Description
    let simplifiedWeatherDescription = data.weather[0].main; // Main weather descriptions: Clear, Clear sky, Cloud, Few clouds, Broken clouds, Rain, Snow
    let currentTempFarenheit = kelvinToFarenheit(data.main.temp); // Current Temp Farenheit
    let maxTempFarenheit = kelvinToFarenheit(data.main.temp_max); // Max Temp Farenheit
    let minTempFarenheit = kelvinToFarenheit(data.main.temp_min); // Min Temp Farenheit
    let today = new Date().toDateString(); // Today's Date in human readable format I AM HU-MON. 

    let weatherDiv = document.getElementById("weather");
    weatherDiv.innerHTML = `<section id="todaysDate">${today}</section>`;
    weatherDiv.innerHTML += `<section id="todaysCurrentTemp">${currentTempFarenheit}°</section>`;
    weatherDiv.innerHTML += `<section id="todaysWeather">${weatherDescription}</section>`;
    weatherDiv.innerHTML += `<section id="todaysHigh">${maxTempFarenheit}°</section>`;
    weatherDiv.innerHTML += `<section id="todaysLow">${minTempFarenheit}°</section>`;
    
});

// ====WeatherAPI End===========================================================

function getMeetups () {
    return $.ajax({
        url: `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&page=20&key=172e1f759224d522749271d19632264`
    }).done((meetupdata) => {
        return meetupdata;
    });
}


function printMeetups (div){
    getMeetups()
    .then((meetupdata) => {
        let event = meetupdata.events;
        for (let i = 0; i < 10; i++) {
            $('#print').append(`<li class="meetupevent"><h2>${event[i].name}</h2><h3>${event[i].local_date} ${event[i].local_time}</h3><p>${event[i].venue.name} - ${event[i].venue.address_1}<br><a target="_blank" href="${event[i].link}">learn more</a></li>`);
        }
    });
}


function printBooks(div){
    getBooks()
   .then((books) => {

    let test = JSON.parse(books);
    var limitedBooks = test.docs.slice(0,10);

    for (var i = 0; i < limitedBooks.length; i++) {

        $('#print').append(`<h2 class="book">${limitedBooks[i].title}</h2>`);
        }
   });
   }

module.exports = {printNews, printMeetups, getBooks, printBooks};

   
