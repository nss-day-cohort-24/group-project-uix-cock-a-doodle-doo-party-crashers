"use strict";
let $ = require('../lib/node_modules/jquery');




printNews();

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
       for(var i = 0; i < articles.length; i++){
           $('#print').append(`<li class="newsArticle" id=${Math.random()}>${articles[i].title}</li>`);
       }
   });
   }
    

//    printMeetups();

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
        for (let i = 0; i < event.length; i++) {
            console.log("event name", event[i].name);
            $('#print').append(`<li class="meetupevent"><h2>${event[i].name}</h2></li>`);
        }
    });
}