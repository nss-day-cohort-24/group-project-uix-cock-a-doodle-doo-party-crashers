"use strict";

let $ = require('../lib/node_modules/jquery');
let printJS = require("./print");

var print = $('#print');
var news = $("#news");
var meetups = $("#meetups");
var books = $("#books");
var favz = $("#favz");

$(document).ready(() => {
    printJS.printNews();
});

news.click(() => {
    console.log("oh hai news");    
    event.preventDefault();
    print.html();
    printJS.printNews();
    
});
meetups.click(() => {
    console.log("oh hai meetups");
    event.preventDefault();
    print.html();
    printJS.printMeetups();
});
books.click(() => {
    console.log("oh hai books");
    event.preventDefault();
    print.html();
    printJS.printBooks();
});
favz.click(()=> {
    event.preventDefault();

    console.log("hey gurl hey");
});