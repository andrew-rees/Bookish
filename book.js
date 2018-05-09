const express = require("express");
const pgp = require("pg-promise");
const Display = require("./display.js");



module.exports = class Books {
    constructor(isbn, dewey, availability, dueDate, bookType, checkedOutTo, title, bookId, authorId, authorFullName) {
      this.isbn = isbn;
      this.dewey = dewey;
      this.availability = availability;
      this.dueDate = dueDate;
      this.bookType = bookType;
      this.checkedOutTo = checkedOutTo;
      this.title = title;
      this.bookId = bookId;
      this.authorId = authorId; // turn this into number?
      this.authorFullName = authorFullName;
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