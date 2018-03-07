"use strict";

let $ = require('jquery');

let num = 1;
let number;
let identifer;
let meetupArray = [];
let uid ="hahashahahdsfhjasdp";

function buildMeetup(event) {
    for (let i = 0; i < 10; i++) {
        if (num < 10) {
            number = num.toString();
            identifer = "id_0" + number;
        } else {
            number = num.toString();
            identifer = "id_" + number;
        }

        $('#print').append(`<li class="meetupevent"><button id="meetupFavorite" class="${identifer}">Add to Favz</button>
        <h2 class="${identifer}">${event[i].name}</h2>
        <h3 class="${identifer}">${event[i].local_date}</h3>
        <h3 class="${identifer}">${event[i].local_time}</h3>
        <p class="${identifer}">${event[i].venue.name}</p>
        <p class="${identifer}"> ${event[i].venue.address_1}</p>
        <br><a class="${identifer}" target="_blank" href="${event[i].link}">learn more</a></li>`);

        meetupArray.push( 
            {
            id: identifer,
            name: event[i].name,
            date: event[i].local_date,
            time: event[i].local_time,
            venue: event[i].venue.name,
            address: event[i].venue.address_1,
            url: event[i].link
        });
        num = num + 1;
    }
    console.log("meetup array inside of loop", meetupArray);
    }



console.log("meetup array outside of loop", meetupArray);
module.exports = { buildMeetup };