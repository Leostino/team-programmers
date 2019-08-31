// programmer object

class Programmer {
    constructor(name, position, age, language) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.language = language;
    }
// print programmers method

    printInfo() {
        console.log(`
        Name: ${this.name}
        Position: ${this.position}
        Age: ${this.age}
        Language: ${this.language}
        `);
    }
}

module.exports = Programmer;