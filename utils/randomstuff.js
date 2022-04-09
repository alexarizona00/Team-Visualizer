//this is where I will write all the messy stuff to reference later. 

const { builtinModules } = require("module");
const inquirer = require('inquirer')
const fs = require('fs')


// array of inquirer objects/questions
const questions = [
    {
        type: 'input',
        message: 'What is the team members name?',
        name: 'theirname',
    },
    {
        type: 'list',
        message: 'What is their role with the company?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Project Manager', 'Junior Dev', 'Intern',],
    },
    {
        type: 'input',
        message: 'What is their github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'restart',
        choices: ['yes', 'no'],
    },
];
// this function is used to start the prompts and then repeat it depending on their last input. if they want to add another member , it writes the last one and then starts a new one. 
function askQuestions() {
    inquirer
        .prompt([
            ...questions
        ])
        .then((answers) => {
            if (answers.restart == 'yes') {
                fs.writeFile(`${answers.theirname}.json`, JSON.stringify(answers), (err) =>
                    err ? console.error(err) : console.log('')
                )
                askQuestions()
            }
            else {
                fs.writeFile(`${answers.theirname}.html`, JSON.stringify(answers), (err) =>
                    err ? console.error(err) : console.log(`All done. Thanks for using this generator`))
            }
        });
}



exports.askQuestions = askQuestions;

