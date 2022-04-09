const Employee = require('./employeeclass')

class Intern extends Employee {
    constructor(theirname, id, email,school) {
        super(theirname, id, email)
        this.school = school
    }
    getSchool() {
        console.log(this.school)
    }
    getRole() {
        return "intern"
    }

}

module.exports = Intern