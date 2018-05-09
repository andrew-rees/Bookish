const express = require("express");
const pgp = require("pg-promise");
const readline = require("readline-sync");
const Display = require("./display.js");
const DbAccess = require("./dbAccess.js"); //temp
const AdvancedSearch = require("./advancedSearch.js")

//Choice to show all books, authors or available books

let whatTypeOfSearch = null;
while (whatTypeOfSearch === null){
    const allBooksCommand = 'All Books';
    const allAuthorsCommand = 'All Authors';
    const allAuthorsAndBooksCommand = 'All Authors with books';
    const advancedSearch = 'Advanced Search'
    console.log("What would you like to search for? \n-Enter '" + allBooksCommand + "' to show all books in the Library; \n-Enter '" + allAuthorsCommand + "' to show all Authors in the Library; \n-Enter '" + allAuthorsAndBooksCommand + "' to show all Authors and their books in the Library; \nOr enter '" + advancedSearch + "' to do be given more specific search options.")
    whatTypeOfSearch = readline.prompt().toLowerCase();
    const display = new Display();

    if (whatTypeOfSearch === allBooksCommand.toLowerCase()) {
        display.showAllBooks();
    }
    else if (whatTypeOfSearch === allAuthorsCommand.toLowerCase()){
        display.showAllAuthors();
    }
    else if (whatTypeOfSearch === allAuthorsAndBooksCommand.toLowerCase()){
        display.showAllAuthorsAndBooks();
    }
    else if (whatTypeOfSearch === advancedSearch.toLowerCase()){
        //advancedSearch();
    }
    else {
        console.log("Oops, please start again...")
        whatTypeOfSearch = null;
    }
}

