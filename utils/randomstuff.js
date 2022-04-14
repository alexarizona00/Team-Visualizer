const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./employeeclass')
const Manager = require('./managersubclass')
const Engineer = require('./engineersubclass')
const Intern = require('./internsubclass');
let team = [];
let finalHTML = ``
let theCards = ''
function compileHtml(team) {

    if (team.constructor.name == 'Manager') {
        theCards +=
        `<div class="card col m-3" style="width: 12rem;">
        <div class="card-header">
         <h2>Manager</h2>
        </div>
    
        <ul class="list-group list-group-flush">
          <li class="list-group-item">My name is ${team.theirname}</li>
          <li class="list-group-item">Id#${team.id}</li>
          <li class="list-group-item">Reach me at ${team.email}</li>
          <li class="list-group-item">You can find me in office ${team.officenumber}</li>
        </ul>
        </div>`



    }
    if (team.constructor.name == 'Engineer') {
        theCards +=
        `<div class="card col m-3" style="width: 12rem;">
        <div class="card-header">
          <h2>Engineer</h2>
        </div>
    
        <ul class="list-group list-group-flush">
          <li class="list-group-item">My name is ${team.theirname}</li>
          <li class="list-group-item">Id#${team.id}</li>
          <li class="list-group-item">Reach me at ${team.email}</li>
          <li class="list-group-item">See my latest work at https://www.github.com/${team.github}</li>
        </ul>
        </div>`

    }
    if (team.constructor.name == 'Intern') {
        theCards +=
            `<div class="card col m-3" style="width: 12rem;">
            <div class="card-header">
              <h2>Intern</h2>
            </div>
        
            <ul class="list-group list-group-flush">
              <li class="list-group-item">My name is ${team.theirname}</li>
              <li class="list-group-item">Id#${team.id}</li>
              <li class="list-group-item">Reach me at ${team.email}</li>
              <li class="list-group-item">I currently attend ${team.school}</li>
            </ul>
            </div>`


    }
}

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
                const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerNumber);
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
                    for (let i = 0; i < team.length; i++) {
                        compileHtml(team[i])
                    }
                    finalHTML = `<!DOCTYPE html>
                   <html lang="en">
                   
                   <head>
                     <meta charset="UTF-8">
                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
                     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                     <title>Your Team's Portfolio</title>

                   </head>
                   
                   <body style="background-color:aqua">
                     <header>
                         <h1 style="text-align:center; border-bottom:3px solid gray">
                             Who's on my team?
                         </h1>
                     </header>
                   
                     <section class="row">
                     ${theCards}
                     </section>
                   
                   </body>
                   
                   </html>`
                   
                    fs.writeFile('team.html', finalHTML, err => {
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
                const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGit);
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
                    , name: "internName"
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
                    , message: "What is the intern's email?"
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