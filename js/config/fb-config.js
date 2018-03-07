"use strict";
let fbCreds = require("./fb-creds");
let firebase = require('firebase/app');
require("firebase/auth");

const config = {
    apiKey: fbCreds.apiKey,
    authDomain : fbCreds.authDomain,
};

firebase.intializeApp(config);


module.exports = firebase;