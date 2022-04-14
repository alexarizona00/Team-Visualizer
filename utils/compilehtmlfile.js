// here are going to have the logic to append each card as it is generated to the html file, that will ultimately get written as the output from the fs.writefile
const fs = require('fs')
const Intern = require("./internsubclass")
const Manager = require("./managersubclass")
const Engineer = require("./engineersubclass")
let theCards = '';

function compileHtml(employee) {

    if (employee.constructor.name == 'Manager') {
        theCards +=
            `<div style="border: 5px solid black;">
    <h1 id=${employee.theirname}></h1>
    <h2 id=${employee.id}></h2>
    <h2 id=${employee.email}></h2>
    <h2 id=${employee.officenumber}></h2>

</div>`
       
    }
    if (employee.constructor.name == 'Engineer') {
        theCards +=
            `<div style="border: 5px solid black;">
        <h1 id=${employee.theirname}></h1>
        <h2 id=${employee.id}></h2>
        <h2 id=${employee.email}></h2>
        <h2 id=${employee.github}></h2>
    
    </div>`
    
    }
    if (employee.constructor.name == 'Intern') {
        theCards +=
            `<div style="border: 5px solid black;">
        <h1 id=${employee.theirname}></h1>
        <h2 id=${employee.id}></h2>
        <h2 id=${employee.email}></h2>
        <h2 id=${employee.school}></h2>
    
    </div>`
    
    }
}


module.exports = theCards;



