"use strict";
// where all the calls to the APIs will happen
console.log('fetch.js working');
let $ = require('../lib/node_modules/jquery');





function getNews() {
    return $.ajax({
        url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=019498fb2ac9480893b5eec1134d9a6c`,
    }).done((newsData) => {
        console.log("news Data call", newsData);
        return newsData;
   });
}



module.exports = getNews;