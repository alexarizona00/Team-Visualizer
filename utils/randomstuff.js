//this is where I will write all the messy stuff to reference later. 

const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./employeeclass')
const Manager = require('./managersubclass')
const Engineer = require('./engineersubclass')
const Intern = require('./internsubclass');
let team = [];

// // array of inquirer objects/questions
// const questions = [
//     {
//         type: 'input',
//         message: 'What is the team members name?',
//         name: 'theirname',
//     },
//     {
//         type: 'list',
//         message: 'What is their role with the company?',
//         name: 'role',
//         choices: ['Manager', 'Engineer', 'Project Manager', 'Junior Dev', 'Intern',],
//     },
//     {
//         type: 'input',
//         message: 'What is their github username?',
//         name: 'github',
//     },
//     {
//         type: 'input',
//         message: 'What is their email address?',
//         name: 'email',
//     },
//     {
//         type: 'list',
//         message: 'Would you like to add another team member?',
//         name: 'restart',
//         choices: ['yes', 'no'],
//     },
// ];

class Makemyteam {

areYouAManager() {
    inquirer
        .prompt([
            {
                type: "confirm"
                , message: "Are you a team manager?"
                , name: "checkmanager"
            }
        ]).then(answers => {
            if (answers.checkmanager) {
                this.createManager()
            } else {
                console.log("You need to be a manager to create a team!")
                process.exit(0);
            }
        })
};

createManager() {
    inquirer
        .prompt([
            {
                type: "input"
                , message: "What is your name?"
                , name: "managerName"
            },
            {
                type: "input"
                , message: "What is your Employee ID?"
                , name: "managerID"
            },
            {
                type: "input"
                , message: "What is your office number?"
                , name: "managerNumber"
            },
            {
                type: "input"
                , message: "What is your office email?"
                , name: "managerEmail"
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerPhone);
            team.push(manager);
            this.createTeam();
        });
};

createTeam() {
    inquirer
        .prompt([
            {
                type: "list"
                , message: "What teams members would you like to create?"
                , choices: ["Engineer", "Intern", "None"]
                , name: "employeeType"
            }
        ]).then(answers => {
            if (answers.employeeType === "Engineer") {
                this.createEngineer();
            } else if (answers.employeeType === "Intern") {
                this.createIntern();
            } else {
                fs.writeFile('index.html', JSON.stringify(team), err => {
                    if (err) throw err;
                    console.log("team.html document generated!")
                })

            }
        });
};

createEngineer() {
    inquirer
        .prompt([
            {
                type: "input"
                , message: "What is the engineer's name?"
                , name: "engineerName"
            },
            {
                type: "input"
                , message: "What is the engineer's ID?"
                , name: "engineerID"
            },
            {
                type: "input"
                , message: "What is the engineer's github username?"
                , name: "engineerGit"
            },
            {
                type: "input"
                , message: "What is the engineer's office email?"
                , name: "engineerEmail"
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID,answers.engineerEmail, answers.engineerGit);
            team.push(engineer);
            this.createTeam();
        });
};

createIntern() {
    inquirer
        .prompt([
            {
                type: "input"
                , message: "What is the intern's name?"
                , name: "  internName"
            },
            {
                type: "input"
                , message: "What is the intern's ID?"
                , name: "internID"
            },
            {
                type: "input"
                , message: "What is the intern's school?"
                , name: "internSchool"
            },
            {
                type: "input"
                , message: "What is the intern's office email?"
                , name: "internEmail"
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            team.push(intern);
            this.createTeam();
        });
}


}
module.exports = Makemyteam