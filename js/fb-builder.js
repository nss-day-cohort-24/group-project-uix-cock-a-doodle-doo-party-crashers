"use strict";
var uid = "sjhdfsd";

function buildFavoriteMeetup(name, date, time, venue, address, url){
    let meetupObject = {
        "name": name,
        "date": date,
        "time": time,
        "venue": venue,
        "address": address,
        "url": url,
        "uid": uid
    };
}

module.exports = { buildFavoriteMeetup };
