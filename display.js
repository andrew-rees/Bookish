const express = require("express");
const pgp = require("pg-promise");
const Book = require("./book.js");
const Author = require("./author.js");

module.exports = class Display {
    static showAllBooks() {
        const db = pgp()("postgres://postgres:database@localhost:3000/bookish");
        //show all the books as array objects
        
            //Query returns Author full name
            //display full name instead of Authorid in the .return method
        const showAllBooks =
            db.any('SELECT * FROM "Book"')
            .then(booksReturn => {
                booksReturn.forEach(bookJson => {
                    const singleBook = new Book(
                        bookJson.ISBN,
                        bookJson.DEWEY,
                        bookJson.Availability,
                        bookJson.Due_Date,
                        bookJson.Book_Type,
                        bookJson.Checked_Out_To,
                        bookJson.Title,
                        bookJson.Alternative_Title,
                        bookJson.Book_ID,
                        bookJson.Author_ID)
                        // function translateAuthorIdToFullName(){
                        //     //get authorid from bookJson Or get this.AuthorID
                        //     //insert into SQL query on Author table
                        //     const translateAuthor = db.any('select "Author_Full_Name" from "Author" where "Author_ID" = ' + bookJson.Author_ID)
                        //     .then(foo => {
                        //         return translateAuthor
                        //     })
                            //Query returns Author full name
                            //display full name instead of Authorid in the .return method
                            

                    console.log(singleBook.report())
                //};
                console.log("Total number of books in the Library: " + booksReturn.length + "\n----------------");
                //console.log(booksReturn);

            }).catch((ex) => {
                console.log(ex);
            });
    })
}


    static showAllAuthors() {
        const db = pgp()("postgres://postgres:database@localhost:3000/bookish");
        const showAllAuthors =

            db.any('SELECT * FROM "Author"')
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