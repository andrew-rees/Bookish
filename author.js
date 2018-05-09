module.exports = class Authors {
    constructor(authorId, firstName, middleName, surname, pseudonymFirstName, pseudonymMiddleName, pseudonymSurname, authorFullName) {
      this.authorId = authorId;
      this.firstName = firstName;
      this.middleName = middleName;
      this.surname = surname;
      this.pseudonymFirstName = pseudonymFirstName;
      this.pseudonymMiddleName = pseudonymMiddleName;
      this.pseudonymSurname = pseudonymSurname;
      this.authorFullName = authorFullName;
    }

    pseudonymnFull(){
        if (this.pseudonymFirstName !== null) {
            return this.pseudonymFirstName + this.pseudonymSurname
        }
        else {
            return "None"
        }
    }

    report(){
        return (
            "\nFULL NAME: " + this.authorFullName +
            "\nKNOWN PSEUDONYMS: " + this.pseudonymnFull() +
            "\n -------------------------"
        )
    }

}