const Display = require("./display.js");

module.exports = class Authors {
    constructor(authorJson) {
      this.authorId = authorJson.Author_ID;
      this.firstName = authorJson.First_Name;
      this.middleName = authorJson.Middle_Name;
      this.surname = authorJson.Surname;
      this.pseudonymFirstName = authorJson.Pseudonym_First_Name;
      this.pseudonymMiddleName = authorJson.Pseudonym_Middle_Name;
      this.pseudonymSurname = authorJson.Pseudonym_Surname;
      this.authorFullName = authorJson.Author_Full_Name;
    }

    pseudonymnFull(){
        if (this.pseudonymFirstName !== null) {
            return this.pseudonymFirstName + " " + this.pseudonymSurname
        }
        else {
            return "None"
        }
    }

    report(){
        return (
            "FULL NAME: " + this.authorFullName +
            "\nKNOWN PSEUDONYMS: " + this.pseudonymnFull() +
            "\n-------------------------"
        )
    }

}