"use strict";

let $ = require('jquery');

let num = 1;
let number;
let w;


function buildMeetup(event) {
    for (let i = 0; i < 10; i++) {
        if (num < 10) {
            number = num.toString();
            w = "id_0" + number;
        } else {
            number = num.toString();
            w = "id_" + number;
        }

        $('#print').append(`<li class="meetupevent"><button id="favorite" class="${w}">Add to Favz</button><h2 class="${w}">${event[i].name}</h2><h3class="${w}">${event[i].local_date} ${event[i].local_time}</h3><p class="${w}">${event[i].venue.name} - ${event[i].venue.address_1}<br><a class="${w}" target="_blank" href="${event[i].link}">learn more</a></li>`);
        
        num = num + 1;
    }

}



module.exports = { buildMeetup };