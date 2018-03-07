"use strict";
let $ = require('../lib/node_modules/jquery');

function getBooks(searchBooks) {
    return $.ajax({
        url: `http://openlibrary.org/search.json?q=${searchBooks}&limit=10`,
    });
} 




module.exports = {getBooks};