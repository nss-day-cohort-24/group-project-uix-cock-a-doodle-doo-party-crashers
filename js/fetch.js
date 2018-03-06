"use strict";
let $ = require('../lib/node_modules/jquery');

function getBooks() {
    var searchBooks = "harry potter"; // Will be input.value
    return $.ajax({
        url: `http://openlibrary.org/search.json?q=${searchBooks}`,
    });
} 




module.exports = {getBooks};