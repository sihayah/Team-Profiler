const inquirer = require("inquirer")

function getEmployeeData() {
      return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the employee's name:",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log("Please enter name.")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter employee ID:",
                validate: (idInput) => {
                    if (idInput) {
                        return true
                    } else {
                        console.log("Please enter ID.")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter employee's Email:",
                validate: (emailInput) => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log("Please enter Email.")
                        return false
                    }
                }
            }
        ]) 
}

module.exports = { getEmployeeData }