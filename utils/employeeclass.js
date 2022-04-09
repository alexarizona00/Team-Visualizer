class Employee {
    constructor(theirname, id, email) {
        this.theirname = theirname;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }

    getId() {
        console.log(this.id)

    }

    getEmail() {
        console.log(this.email)

    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee