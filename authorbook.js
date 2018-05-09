const Display = require("./display.js");

module.exports = class AuthorBook {
    constructor(authorBookJson) {
      this.title = authorBookJson.Title;
      this.bookType = authorBookJson.Book_Type;
      this.availability = authorBookJson.Availability;
      this.bookId = authorBookJson.Book_ID;
      this.authorFullName = authorBookJson.Author_Full_Name;
      this.authorId = authorBookJson.Author_ID;
    }
 
    // first time thru, show Author/Book report
    // when Author ID already exists in Array, show Book Report
    // sort display by Author ID ascending


     // if else - if Author ID does not exist in authorbook [], show .reportAuthorBook, else show .reportBook




    reportAuthorBook(){
        return (
            "\n\n" +
            "AUTHOR: " + this.authorFullName.toUpperCase() +
            "\n-------------------" +
            "\nTITLE: " + this.title +
            "\nBOOK TYPE: " + this.bookType +
            "\nAVAILABILITY: " + this.availability +
            "\n-------------------"
        )
    }

    reportBook(){
        return (
            "TITLE: " + this.title +
            "\nBOOK TYPE: " + this.bookType +
            "\nAVAILABILITY: " + this.availability +
            "\n-------------------"
        )
    }

    reportChoice(authorBooks){
        for(let i = 0; i < authorBooks.length; i++) {
            if (authorBooks[i].authorId === this.authorId) {
                return (this.reportBook())
            }
        }
        return (this.reportAuthorBook())    
    }
}
