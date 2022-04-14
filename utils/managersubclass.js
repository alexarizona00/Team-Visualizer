const Employee = require('./employeeclass')

class Manager extends Employee {
    constructor(theirname, id, email,officenumber) {
        super(theirname, id, email)
        this.officenumber = officenumber
    }
    getRole() {
        return "manager"
    }
    getOffice(){
        return this.officenumber
    }

}

module.exports = Manager
