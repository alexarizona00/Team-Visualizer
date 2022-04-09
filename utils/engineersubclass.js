const Employee = require('./employeeclass')

class Engineer extends Employee {
    constructor(theirname, id, email,github) {
        super(theirname, id, email)
        this.github = github
    }
    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer