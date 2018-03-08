"use strict";

let $ = require('../lib/node_modules/jquery');
let printJS = require("./print");




let displaySearchBar = () => {
    $('#print').append(`<input id="search" type="search"></input><button id="search-btn">Search</button>`);
};

let searchInputValue = () => {
    let value = $("#search").val();
    $('#print').empty();
    displaySearchBar();
    printJS.printBooks(value);   
    $('#search').val('');  
};

module.exports = {displaySearchBar, searchInputValue};