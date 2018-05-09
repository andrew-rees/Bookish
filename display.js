const Book = require("./book.js");
const Author = require("./author.js");
const DbAccess = require("./dbAccess.js");

module.exports = class Display {
    constructor() {
        this.db = new DbAccess("postgres://postgres:database@localhost:3000/bookish");
    }

    showAllBooks() {
        
        //show all the books as array objects

        //Query returns Author full name
        //display full name instead of Authorid in the .return method
        this.db.getAllBooks()
        .then(booksReturn => {
            console.log("---------------------------------------------------\n------------ALL BOOKS IN THE LIBRARY------------\n---------------------------------------------------")
            booksReturn.forEach(bookJson => {
                const singleBook = new Book(bookJson)
                console.log(singleBook.report())
            });
            console.log("Total number of books in the Library: " + booksReturn.length + "\n----------------------");
        }).catch((ex) => {
            console.log(ex);
        })
    }


    showAllAuthors() {
        this.db.getAllAuthors()
        .then(authorReturn => {
            console.log("---------------------------------------------------\n------------ALL AUTHORS IN THE LIBRARY------------\n---------------------------------------------------")
            authorReturn.forEach(authorJson => {
                const singleAuthor = new Author(authorJson)
                console.log(singleAuthor.report())
            });
            console.log("Total number of Authors in the Library: " + authorReturn.length + "\n----------------------");
            //console.log(authorReturn);
        }).catch((ex) => {
            console.log(ex);
        });
    }

    //show all Authors as array objects

}
