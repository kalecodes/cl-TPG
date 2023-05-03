const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super(name, role, id, email);

        this.school = school;
    }
}

module.exports = Intern;