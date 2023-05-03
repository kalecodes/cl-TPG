const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.name;
        this.employees = {
            manager: {},
            engineers: [],
            interns: []
        };
    }
    
    promptName() {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is the name of this team?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            })
            .then(({ name }) => {
                this.name = name;
                this.promptManager();
            });
    } 

    promptManager() {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "What is the name of this team's manager?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "What is this manager's employee ID?",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "What is this manager's email address?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    type: 'text',
                    name: 'phone',
                    message: "What is this manager's phone number?",
                    validate: phoneInput => {
                        if (phoneInput) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            ])
            .then(({ name, id, email, phone }) => {
                this.employees.manager = new Manager(name, 'Manager', id, email, phone);
                console.log(this.employees);
                this.chooseAction();
            });
            
    }

    chooseAction() {
        inquirer
            .prompt({
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: ['Add an engineer', 'Add an intern', 'Finish team'],
            })
            .then(({ choice }) => {
                if (choice === 'Add an engineer') {
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the engineer's name?",
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'text', 
                                name: 'id',
                                message: "What is this engineer's employee ID?",
                                validate: idInput => {
                                    if (idInput) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is this engineer's email address?",
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'github',
                                message: "What is this engineer's GitHub username?",
                                validate: githubInput => {
                                    if (githubInput) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            }
                        ])
                        .then(({ name, id, email, github }) => {
                            this.employees.engineers.push(new Engineer(name, "Engineer", id, email, github));
                            console.log(this.employees);
                            this.chooseAction();
                        })
                } else if (choice === 'Add an intern') {
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'name',
                                message: "What is the intern's name?",
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'text', 
                                name: 'id',
                                message: "What is this intern's employee ID?",
                                validate: idInput => {
                                    if (idInput) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "What is this intern's email address?",
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'text',
                                name: 'school',
                                message: 'What school does this intern attend?',
                                validate: schoolInput => {
                                    if (schoolInput) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                            }
                            
                        ])
                        .then(({ name, id, email, school }) => {
                            this.employees.interns.push(new Intern (name, "Intern", id, email, school));
                            console.log(this.employees);
                            this.chooseAction();
                        })
                } else {
                    console.log("You have chosen to complete the application.");
                    this.buildSite();
                }
            })
    }

    buildSite() {
        console.log("Your site is being built!");
    }


}


module.exports = Team;