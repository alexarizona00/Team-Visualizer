const fs = require('fs')
const inquirer = require('inquirer')
const Makemyteam = require('./utils/randomstuff')
const Employee = require('./utils/employeeclass')
const Manager = require('./utils/managersubclass')
const Engineer = require('./utils/engineersubclass')
const Intern = require('./utils/internsubclass');
let team = [];

const appStart = new Makemyteam();

appStart.areYouAManager()







