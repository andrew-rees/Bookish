//this could all be shite

const express = require("express");
const pgp = require("pg-promise");
const readline = require("readline-sync");

module.exports = class Account {
    static createAccount() {
        const db = pgp()("postgres://postgres:database@localhost:3000/bookish");
        console.log("Choose a username")
        let chosenUsername = readline.prompt();

        console.log("Choose a password (8 or less characters)");
        let chosenPassword = readline.prompt();
    }


}