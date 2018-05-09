const pgp = require("pg-promise");

module.exports = class DbAccess {
    constructor(connectionString) {
        this.db = pgp()(connectionString);
    }

    getAllBooks() {
        return this.db.any('SELECT * FROM "Book"');
    }

    getAllAuthors() {
        return this.db.any('SELECT * FROM "Author"')
    }
}
