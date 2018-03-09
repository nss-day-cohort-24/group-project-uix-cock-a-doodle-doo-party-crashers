"use strict";

//install firebase into lib folder npm install firebase --save
let firebase = require("./fb-config"),
provider = new firebase.auth.GoogleAuthProvider(),
currentUser = null;

let mainJS  = require("./main");
let $ = require('jquery');

console.log("test");


// ========================
$(document).ready(function() {
// 	console.log($("img").html());
console.log("logout", $("body"));
$("#logout").hide();
});


// $("img").hide();


// $("#logout").click(() => {
// 	console.log("logout clicked");
// 	// user.logOut();
// 	// user.logInGoogle()
// 	// .then((result) => {
// 	//   user.setUser(result.user.uid);
// 	//   $("#auth-btn").addClass("is-hidden");
// 	//   $("#logout").removeClass("is-hidden");
// 	//   console.log("post-logout-login populate", result);
// 	//   loadSongsToDOM();
// 	// });
//    });









// ========================




logInGoogle()
.then((result) => {
console.log("result from login", result.user.uid);
  // user = result.user.uid;
setUser(result.user.uid);
// let loadSongsToDom = mainJS.loadSongsToDom;
});

//listen for changed state
firebase.auth().onAuthStateChanged((user) => {
	// console.log("onAuthStateChanged", user);
	if (user){
		currentUser = user.uid;
		// console.log("current user Logged in?", currentUser);
	}else {
		currentUser = null;
		// console.log("current user NOT logged in:", currentUser);
	}
});

function logInGoogle() {
	//all firebase functions return a promise!! Add a then when called
    // console.log('tried to login');
    return firebase.auth().signInWithPopup(provider);
}

function logOut(){
	return firebase.auth().signOut();
}
function getUser(){
	// console.log("ran getUser function");
	return currentUser;
}

function setUser(val){
	currentUser = val;
}

module.exports = {logInGoogle, getUser, setUser, logOut};

