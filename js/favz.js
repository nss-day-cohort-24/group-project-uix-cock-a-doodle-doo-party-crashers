"use strict";

let $ = require('../lib/node_modules/jquery');
var star = $("#favzStar");
let firebase = require('./fb-config');

let meetupFavs = [];


function getNewsFavs(user) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/news.json?orderBy="uid"&equalTo="${user}"`
    }).done((favData) => {
      console.log('favData from getNews Favs', favData);
      return favData;
    });
  }

module.exports = {getNewsFavs};  

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
