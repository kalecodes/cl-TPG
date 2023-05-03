const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, role, id, email, phone) {
        super(name, role, id, email);
        
        this.phone = phone;
    }
}

module.exports = Manager;