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
            booksReturn.forEach(bookJson => {
                const singleBook = new Book(bookJson)
                console.log(singleBook.report())
            });
            console.log("Total number of books in the Library: " + booksReturn.length + "\n----------------");
        }).catch((ex) => {
            console.log(ex);
        })
    }


    showAllAuthors() {
        this.db.getAllAuthors()
        .then(authorReturn => {
            authorReturn.forEach(authorJson => {
                const singleAuthor = new Author(
                    authorJson.Author_ID,
                    authorJson.First_Name,
                    authorJson.Middle_Name,
                    authorJson.Surname,
                    authorJson.Pseudonym_First_Name,
                    authorJson.Pseudonym_Middle_Name,
                    authorJson.Pseudonym_Surname,
                    authorJson.Author_Full_Name)
                console.log(singleAuthor.report())
            });
            console.log("Total number of Authors in the Library: " + authorReturn.length + "\n----------------");
            //console.log(authorReturn);
        }).catch((ex) => {
            console.log(ex);
        });
    }

    //show all Authors as array objects

}
