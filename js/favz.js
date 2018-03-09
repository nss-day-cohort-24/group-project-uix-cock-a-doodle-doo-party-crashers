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

function getMeetupFavs(user) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/meetups.json?orderBy="uid"&equalTo="${user}"`
  }).done((favData) => {
    return favData;
  });
}

function getBookFavs(user) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/books.json?orderBy="uid"&equalTo="${user}"`
    }).done((favData) => {
      return favData;
    });
}


function editMeetupFav(favID, meetupObj) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/meetups/${favID}.json`,
    type: "PUT",
    data: JSON.stringify(meetupObj)
  }).done((data) => {
    return data;
  });
}


module.exports = {getNewsFavs, getMeetupFavs, getBookFavs, editMeetupFav};  

