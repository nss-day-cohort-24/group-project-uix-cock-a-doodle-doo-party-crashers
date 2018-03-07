"use strict";

let $ = require('../lib/node_modules/jquery');
let printJS = require("./print");
let search = require("./search");
let favzJS = require("./favz");
let builder = require("./fb-builder");

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
    search.searchInputValue();
    // printJS.printBooks();
});
favz.click(()=> {
    event.preventDefault();

    console.log("hey gurl hey");
});

// FAVZ
document.querySelector('#print').addEventListener('click', function makeObjectMeetups(event) {
    console.log("event", event.target.className);

    if (event.target.id === 'meetupFavorite') {
        var classname = event.target.className;
        // console.log("pressed meetupFavorite button", event.target);
        // console.log("GRUUUUUUUUUUUNT");

        var eventDetails = document.getElementsByClassName(classname);
        for (var i = 0; i < eventDetails.length; i++) {
            // console.log(eventDetails[i].innerText);
        event.preventDefault();
        }
        // buildFavoriteMeetup();
    }});

    // module.exports = {makeObjectMeetups};