const express = require("express");
const pgp = require("pg-promise");
const readline = require("readline-sync");
const Display = require("./display.js");

//Choice to show all books, authors or available books
let whatTypeOfSearch = null;
while (whatTypeOfSearch === null){
    const allBooksCommand = 'All Books';
    const allAuthorsCommand = 'All Authors';
    console.log("What would you like to search for? \n-Enter '" + allBooksCommand + "' to show all books in the Library; \n-Enter '" + allAuthorsCommand + "' to show all Authors that have books in the Library")
    whatTypeOfSearch = readline.prompt().toLowerCase();

    if (whatTypeOfSearch === allBooksCommand.toLowerCase()) {
        Display.showAllBooks();
    }
    else if (whatTypeOfSearch === allAuthorsCommand.toLowerCase()){
        Display.showAllAuthors();
    }
    else {
        console.log("Oops, please start again...")
        whatTypeOfSearch = null;
    }
}

