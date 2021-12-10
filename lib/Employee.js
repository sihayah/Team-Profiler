const inquirer = require('inquirer')

class Employee {
    constructor(name, id, email, role) {
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    }
}

class Manager extends Employee{
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email)
        this.role = 'manager'
    }
    getOfficeNumber = function() {
        return inquirer.prompt (
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the managers's office number:",
                validate: (officeNumberInput) => {
                    if (officeNumberInput) {
                        return true
                    } else {
                        console.log("Please enter office number.")
                        return false
                    }
                }
            }
        )
    }
}

class Engineer extends Employee{
    constructor(name, id, email, gitHub,role) {
        super(name, id, email)
        this.role = 'engineer'
    }
    getGithub = function() {
    return inquirer.prompt (
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's gitHub username:",
            validate: (githubInput) => {
                if (githubInput) {
                    return true
                } else {
                    console.log("Please enter gitHub username.")
                    return false
                }
            }
        }
    )
}
  }

class Intern extends Employee{
    constructor(name, id, email, school, role) {
        super(name, id, email)
        this.role = 'intern'
        this.school = school
    }
    getSchool= function() {
        return inquirer.prompt (
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's School:",
                validate: (schoolInput) => {
                    if (schoolInput) {
                        return true
                    } else {
                        console.log("Please enter School.")
                        return false
                    }
                }
            }
        )
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}