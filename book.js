const express = require("express");
const pgp = require("pg-promise");
const Display = require("./display.js");



module.exports = class Books {
    constructor(bookJson) {
      this.isbn = bookJson.ISBN;
      this.dewey = bookJson.DEWEY;
      this.availability = bookJson.Availability;
      this.dueDate = bookJson.Due_Date;
      this.bookType = bookJson.Book_Type;
      this.checkedOutTo = bookJson.Checked_Out_To;
      this.title = bookJson.Title;
      this.bookId = bookJson.Book_ID;
      this.authorId = bookJson.Author_ID; // turn this into number?
      this.authorFullName = bookJson.Author_Full_Name;
    }

    isAvailable() {
        if (this.availability = true) {
            return "Available for loan"
        }
        else {
            return "Not Available currently"
        }

    }
    

    report(){
        return (
            "TITLE: " + this.title +
            "\nAUTHOR: " + this.authorFullName + // get 
            "\nTYPE: " + this.bookType +
            "\nAVAILABILITY: " + this.isAvailable() +
            "\nSHELF REFERENCE  " + this.dewey +
            "\n -------------------------"
        )
    }

}