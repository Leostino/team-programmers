// connect file system

const fs = require("fs");

// connect readline

const rl = require('readline');

// connect to the team.js file

const Team = require("./team.js");

// assign a value to project

let project = "heroku";

// create a new object

let team = new Team(project);

// create a variable for the readline method

const lineReader = rl.createInterface({

    input: fs.createReadStream('members.txt')
});

// read line from member.txt
  
lineReader
.on('line', function (line) {

        console.log('Line from file:', line);

        // push response into an array

        const member = line.split(",");

        console.log(member);

        // add a new programmer to team

        team.addProgrammer(member[0], member[1], member[2], member[3]);
})
.on('close', process);

// code when lineReader is done

function process() {

    // loop through the programmers array and print programmers
    
    for (let i = 0; i < team.programmerCount(); i++) {
        team.programmer[i].printInfo();
               
    }

    console.log(`
        Number of Programmers: ${team.programmerCount()}`);

}