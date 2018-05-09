const Display = require("./display.js");
const readline = require("readline-sync");

function advancedSearch(){
    let advancedSearchUserInput = null;
    while (advancedSearchUserInput === null){
    console.log("Choose from the following: \nAuthor Search, \nBook Search.")
    advancedSearchUserInput = readline.prompt()
    const display = new Display();

    if (advancedSearchUserInput.toLowerCase() === "Author Search".toLowerCase()){
        console.log("works")
        //display.showSpecificAuthorAndBooks()
    }
    else if (advancedSearchUserInput.toLowerCase() === "Book Search".toLowerCase()){
        console.log("Please enter the title of the book: ")
        advancedBookSearchInput = readline.prompt()
        display.showBooks(advancedBookSearchInput);
        
    }

    else {
        console.log("Oops, please start again...")
        advancedSearchUserInput = null;
    }
    }
}

advancedSearch()