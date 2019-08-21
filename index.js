const fs = require("fs");
const rl = require('readline');

const Team = require("./team.js");

let project = "heroku";

let team = new Team(project);

const lineReader = rl.createInterface({
    input: fs.createReadStream('members.txt')
});

// create a programmers array
  
lineReader
.on('line', function (line) {
        console.log('Line from file:', line);
        const member = line.split(",");
        console.log(member);
        team.addProgrammer(member[0], member[1], member[2], member[3]);
})
.on('close', process);

// code when lineReader is done
function process() {

    for (let i = 0; i < team.programmerCount(); i++) {
        team.programmer[i].printInfo();
               
    }

    console.log(`
        Number of Programmers: ${team.programmerCount()}`);

}