const Programmer = require("./programmers.js");

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