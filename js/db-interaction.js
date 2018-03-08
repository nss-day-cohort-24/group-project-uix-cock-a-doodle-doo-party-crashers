"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

require("./interaction");
let $ = require('jquery'),
    firebase = require("./fb-config"),
    printdata = require("./printdata"),
    favzJS = require("./favz"),
    user = require("./user");

// Meetup firebase functions    
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
// News firebase functions
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

    function deleteNewsFav(favID) {
        return $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/news.json`,
          method: 'DELETE'  
        }).done((favData) => {
            return favData;
        });
    }
// Books firebase functions
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


module.exports = {addMeetupFav, addNewsFav, addBooksFav, deleteNewsFav};