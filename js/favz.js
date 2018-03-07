"use strict";

let $ = require('../lib/node_modules/jquery');
var star = $("#favzStar");

let meetupFavs = [];

function addFavoriteMeetup(classname) {
    var slides = document.getElementsByClassName(classname);
    for (var i = 0; i < slides.length; i++) {
        console.log("class name favz", slides[i]);
    }
}

module.exports = { addFavoriteMeetup };

// if (bttn.className === "delete") {
//     let dCompare = bttnId.slice(7, 10);

//     let mCompare = ("textbubble_" + dCompare);

//     let currentMsg = document.getElementById(mCompare);
//     let msgContents = document.getElementById(mCompare).childNodes[0].childNodes[0].innerHTML;

//     currentMsg.innerHTML = "";

//     let msgArray = cardMessagesJS.messages;

//     let m = msgArray.indexOf(msgContents);

//     cardMessagesJS.messages.splice(m, 1);
//     document.getElementById(mCompare).removeAttribute("class");

// }
//     }
// });    
