"use strict";
let $ = require('../lib/node_modules/jquery');
let fetchModule = require("./fetch"); 



printNews();


function printNews(){
    fetchModule.getNews()
   .then((newsData) => {
       let articles = newsData.articles;
       for(var i = 0; i < articles.length; i++){
           $('#print').append(`<li class="newsArticle" id=${Math.random()}>${articles[i].title}</li>`);
       }
   });
   }
   