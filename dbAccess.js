const pgp = require("pg-promise");
const AdvancedSearch = require("./advancedSearch.js")

module.exports = class DbAccess {
    constructor(connectionString) {
        this.db = pgp()(connectionString);
    }

    getAllBooks() {
        return this.db.any('SELECT * FROM "Book"');
    }

    getAllAuthors() {
        return this.db.any('SELECT * FROM "Author"');
    }

    getAuthorsAndGetBooks(){
        return this.db.any('select "Book"."Title", "Book"."Book_Type", "Book"."Availability", "Book"."Book_ID", "Author"."Author_Full_Name", "Author"."Author_ID" from "Book" full join "Author" on "Author"."Author_ID" = "Book"."Author_ID"');
    }

    searchAuthors(){
        return this.db.any()
    }

    searchBooks(advancedBookSearchInput){
        let query = `select * from \"Book\" where \"Title\" ilike '%${advancedBookSearchInput}%'`;
        return this.db.any(query);
    }
}