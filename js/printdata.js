"use strict";

let $ = require('jquery');
let user = require("./user");
let getUser = user.getUser;

let number;
let identifer;

let meetupnum = 1;
let newsnum = 1;
let booksnum = 1;

let meetupArray = [];
let newsArray = [];
let booksArray = [];

function buildMeetup(event) {
    for (let i = 0; i < 10; i++) {
        if (meetupnum < 10) {
            number = meetupnum.toString();
            identifer = "id_0" + number;
        } else {
            number = meetupnum.toString();
            identifer = "id_" + number;
        }

        $('#print').append(`<li class="meetupevent"><button id="meetupFavorite" class="${identifer}">Add to Favz</button>
        <h2>${event[i].name}</h2>
        <h3>${event[i].local_date}</h3>
        <h3>${event[i].local_time}</h3>
        <p>${event[i].venue.name}</p>
        <p> ${event[i].venue.address_1}</p>
        <br><a target="_blank" href="${event[i].link}">learn more</a></li>`);

        meetupArray.push( 
            {
            id: identifer,
            name: event[i].name,
            date: event[i].local_date,
            time: event[i].local_time,
            venue: event[i].venue.name,
            address: event[i].venue.address_1,
            url: event[i].link,
            uid: getUser()
        });
        meetupnum = meetupnum + 1;
    }
}

function buildNews(articles){
    for (var i = 0; i < 10; i++) {
        if (newsnum < 10) {
            number = newsnum.toString();
            identifer = "id_0" + number;
        } else {
            number = newsnum.toString();
            identifer = "id_" + number;
        }

        $('#print').append(`<li><button id="newsFavorite" class="${identifer}">Add to Favz</button>
        <a target="_blank" href="${articles[i].url}">${articles[i].title}</a></li>`);
    

    newsArray.push(
        {
            id: identifer,
            title: articles[i].title,
            url: articles[i].url,
            uid: getUser() 
        });
        newsnum = newsnum + 1;
    }
}
function buildBooks(limitedBooks){
    for (let i = 0; i < 10; i++) {
        if (booksnum < 10) {
            number = booksnum.toString();
            identifer = "id_0" + number;
        } else {
            number = booksnum.toString();
            identifer = "id_" + number;
        }

        // for (var i = 0; i < limitedBooks.length; i++) {
        $('#print').append(`<button id="booksFavorite" class="${identifer}">Add to Favz</button>
            <h2 class="book">${limitedBooks[i].title}</h2>
            <h3>${limitedBooks[i].author_name}</h3>
            <p>${limitedBooks[i].first_publish_year}</p>`);
        // }

        booksArray.push(
            {
                id: identifer,
                title: limitedBooks[i].title,
                author: limitedBooks[i].author_name,
                published: limitedBooks[i].first_publish_year,
                uid: getUser()
            });
            booksnum = booksnum + 1;
    }
}

module.exports = { buildMeetup, meetupArray, buildNews, newsArray, buildBooks, booksArray };