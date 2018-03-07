"use strict";

let $ = require('../lib/node_modules/jquery');
let printJS = require("./print");


let displaySearchBar = () => {
    $('#print').append(`<input id="search" type="search"></input><button id="search-btn">Search</button>`);
};

let searchInputValue = () => {
    let button = $('#search-btn');
    button.on("click", function() {
        let value = $("#search").val();
         printJS.printBooks(value);      
    });
};

module.exports = {displaySearchBar, searchInputValue};