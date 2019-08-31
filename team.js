// connect to programmers.js file

const Programmer = require("./programmers.js");

// create a Team object

class Team {
    constructor(project) {
        this.project = project;
        this.programmer = [];
    }

    addProgrammer(name, position, age, language) {

        this.programmer.push(new Programmer(name, position, age, language));
    }

    programmerCount() {
        return this.programmer.length;
    }
}


module.exports = Team;