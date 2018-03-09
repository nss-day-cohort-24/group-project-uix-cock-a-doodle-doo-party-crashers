"use strict";

let $ = require('../lib/node_modules/jquery');
let printJS = require("./print");
let printdata = require("./printdata");
let search = require("./search");
let interaction = require("./db-interaction");
let favzJS = require("./favz");
let user = require("./user");
let addMeetupFav = interaction.addMeetupFav;
let addNewsFav = interaction.addNewsFav;
let addBooksFav = interaction.addBooksFav;

var print = $('#print');
var news = $("#news");
var meetups = $("#meetups");
var books = $("#books");
var favz = $("#favz");
var newsFavz = $("newsFavz");
// var newsFavzDelete = document.querySelector("newsFavoriteDelete");


// Event listeners
$(document).ready(() => {
    printJS.printNews();
});

document.body.addEventListener('click', check);

function check(event){
    event.preventDefault();
    if(event.target.className === "newsFavoriteDelete"){
        console.log('newsFavoriteDelete clicked');
        interaction.deleteNewsFav();
        favzJS.getNewsFavs(user.getUser()).then((favData) => {
            console.log("favData", favData);
            printdata.printNewsToFavs(favData);
        });
    }

    }

news.click(() => {    
    event.preventDefault();
    print.empty();
    printJS.printNews();
    
});
meetups.click(() => {
    event.preventDefault();
    print.empty();
    printJS.printMeetups();
    $('#print').append(`<h2 id="meetupsHeading">Meetups</h2>`);
});
books.click(() => {
    event.preventDefault();
    print.empty();
    $('#print').append(`<h2 id="booksHeading">Books</h2>`);
    search.displaySearchBar();

});
favz.click(()=> {
    event.preventDefault();
    print.empty();
    $('#print').append(`<h2 id="favzHeading">Favorites</h2>`);

    favzJS.getNewsFavs(user.getUser()).then((favData) => {
        console.log(favData);
        printdata.printNewsToFavs(favData);
    });

    favzJS.getMeetupFavs(user.getUser()).then((favData) => {
        console.log(favData);
        printdata.printMeetupsToFavs(favData);
    });

    favzJS.getBookFavs(user.getUser()).then((favData) => {
        console.log(favData);
        printdata.printBooksToFavs(favData);
    });
});
// $('.newsFavoriteDelete').click(() => {
//     console.log("newsFavDelete clicked");
//     // event.preventDefault();
//     interaction.deleteNewsFav();
//     favzJS.getNewsFavs(user.getUser()).then((favData) => {
//         console.log("favData", favData);
//         printdata.printNewsToFavs(favData);
//     });
// });


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
