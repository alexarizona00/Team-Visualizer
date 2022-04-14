class Employee {
    constructor(theirname, id, email) {
        this.theirname = theirname;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.theirname
    }

    getId() {
      return this.id

    }

    getEmail() {
        return this.email

    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee