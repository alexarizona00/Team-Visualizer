const fs = require('fs')
const inquirer = require('inquirer')
let questions = require('./utils/randomstuff')


inquirer
    .prompt([
        ...questions
    ])
    .then((answers) => {
                  
        generateMarkdown(answers)
    });