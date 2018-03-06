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


function getBooks() {
    var searchBooks = "harry potter"; // Will be input.value
    return $.ajax({
        url: `http://openlibrary.org/search.json?q=${searchBooks}`,
    }).done((booksData) => {
        // console.log("books Data call", booksData);
        let books = JSON.parse(booksData);
        console.log("parsed books", books);
        return booksData;
    });
} 
function printBooks(div){
    getBooks()
   .then((booksData) => {
    let bookDocs = booksData.docs;
    console.log("bookDocs", bookDocs);
    console.log("bookTitle", booksData.num_found);
       for(var j = 0; j < bookDocs.length; j++){

          $('#print').append(`<h2 class="book">${bookDocs[j].title}</h2>`);
       }
   });
   }
printBooks(print);

module.exports = {getBooks, printBooks};


   