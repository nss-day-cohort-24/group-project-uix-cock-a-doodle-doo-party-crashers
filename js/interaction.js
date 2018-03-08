"use strict";

let $ = require('../lib/node_modules/jquery');
let printJS = require("./print");
let printdata = require("./printdata");
let search = require("./search");
let interaction = require("./db-interaction");
let addMeetupFav = interaction.addMeetupFav;
let addNewsFav = interaction.addNewsFav;
let addBooksFav = interaction.addBooksFav;

var print = $('#print');
var news = $("#news");
var meetups = $("#meetups");
var books = $("#books");
var favz = $("#favz");

$(document).ready(() => {
    printJS.printNews();
});

news.click(() => {    
    event.preventDefault();
    print.empty();
    printJS.printNews();
    
});
meetups.click(() => {
    event.preventDefault();
    print.empty();
    printJS.printMeetups();
});
books.click(() => {
    event.preventDefault();
    print.empty();
    search.displaySearchBar();
});
favz.click(()=> {
    event.preventDefault();

    console.log("hey gurl hey");
});


// Query selectors for favorites and search button
document.querySelector('#print').addEventListener('click', (event) => {

    if (event.target.id === "meetupFavorite") {
        let classname = event.target.className;

        for (let i = 0; i < printdata.meetupArray.length; i++) {
                if (classname === printdata.meetupArray[i].id){
                    // PUT to fb
                    console.log("this meetup will put to favorites", printdata.meetupArray[i].id);
                    addMeetupFav(printdata.meetupArray[i]);

                }
            }
        } else if (event.target.id === "newsFavorite"){
            let classname = event.target.className;

            for (let i = 0; i < printdata.newsArray.length; i++) {
                if (classname === printdata.newsArray[i].id) {
                    // PUT to fb
                    console.log("this news will put to favorites", printdata.newsArray[i].id);
                    addNewsFav(printdata.newsArray[i]);
                }
            }
        } else if (event.target.id === "booksFavorite"){
            let classname = event.target.className;

            for (let i = 0; i < printdata.booksArray.length; i++) {
                if (classname === printdata.booksArray[i].id) {
                    // PUT to fb
                    console.log("this book will be put to favorites", printdata.booksArray[i].id);
                    addBooksFav(printdata.booksArray[i]);
                }
            }
        } else if (event.target.id === "search-btn") {
            console.log("I heard the search button");
            search.searchInputValue();
        }
});
