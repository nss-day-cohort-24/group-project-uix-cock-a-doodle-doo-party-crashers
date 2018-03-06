"use strict";

let $ = require('../lib/node_modules/jquery');
let articlesArray = [];



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

       for(var i = 0; i < 10; i++){
            $('#print').append(`<li><a target="_blank" href="${articles[i].url}">${articles[i].title}</a></li>`);
    }
});
}
   printMeetups();

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
function getBooks() {
    var searchBooks = "harry potter"; // Will be input.value
    return $.ajax({
        url: `http://openlibrary.org/search.json?q=${searchBooks}`,
    }).done((booksData) => {
        // console.log("books Data call", booksData);
        let books = JSON.parse(booksData);
        console.log("parsed books", books);
        return booksData;
    });
} 
function printBooks(div){
    getBooks()
   .then((booksData) => {
    let bookDocs = booksData.docs;
    console.log("bookDocs", bookDocs);
    console.log("bookTitle", booksData.num_found);
       for(var j = 0; j < bookDocs.length; j++){

          $('#print').append(`<h2 class="book">${bookDocs[j].title}</h2>`);
       }
   });
   }
printBooks(print);

module.exports = {getBooks, printBooks};

   
