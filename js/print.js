"use strict";
let $ = require('../lib/node_modules/jquery');




printNews();

function getNews() {
    return $.ajax({
        url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=019498fb2ac9480893b5eec1134d9a6c`,
    }).done((newsData) => {
        console.log("news Data call", newsData);
        return newsData;
   });
}


function printNews(div){
    getNews()
   .then((newsData) => {
       let articles = newsData.articles;
       for(var i = 0; i < articles.length; i++){
           $('#print').append(`<li class="newsArticle" id=${Math.random()}>${articles[i].title}</li>`);
       }
   });
   }
    


   