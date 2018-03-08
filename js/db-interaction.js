"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

require("./interaction");
let $ = require('jquery'),
    firebase = require("./fb-config");

    function addMeetupFav(favFormObj) {
        console.log("addSong", favFormObj);
        return $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/meetups.json`,
          type: 'POST',
          data: JSON.stringify(favFormObj),
          dataType: 'json'
       }).done((favID) => {
          return favID;
       });
    }

    function addNewsFav(favFormObj) {
        console.log("addSong", favFormObj);
        return $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/news.json`,
          type: 'POST',
          data: JSON.stringify(favFormObj),
          dataType: 'json'
       }).done((favID) => {
          return favID;
       });
    }

    function addBooksFav(favFormObj) {
        console.log("addSong", favFormObj);
        return $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/books.json`,
          type: 'POST',
          data: JSON.stringify(favFormObj),
          dataType: 'json'
       }).done((favID) => {
          return favID;
       });
    }


module.exports = {addMeetupFav, addNewsFav, addBooksFav};