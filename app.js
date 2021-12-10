const inquirer = require('inquirer')
const fs = require('fs')
const { 
    Employee,
    Manager,
    Engineer,
    Intern
} = require('./lib/Employee')
const { getEmployeeData, getOfficeNumber, getGithub, getSchool } = require('./lib/employeeData')
const { generateTeamHtml } = require('./src/page-template')
const employeeJson = require('./data/employees.json')
const employeeArr = employeeJson.employees
const writeFile = (fileName, fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./index.html', fileContent, err => {
            if (err) {
                reject(err)
                return
            } 
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

let newTeam = []
  
function Team() {
    this.manager
    this.employees = []
}

initialize = () => {
    console.log(`
    ==========================================
    Ready To Add a new Team?
    ==========================================
    Start by entering the Team Manager's Data.
    ==========================================
    `) 
   console.log('Adding manager...')
    getEmployeeData().then(({name, id, email}) => {
        this.manager = new Manager(name, id, email)
        this.manager.officeNumber = this.manager.getOfficeNumber().then(({officeNumber}) => {
            this.manager.officeNumber = officeNumber;
            newTeam.push(this.manager)
            chooseRole()
        
        })
    })
}

getEngineer = () => {
    console.log('adding engineer...')
    getEmployeeData().then(({name, id, email}) => {
        this.employee = new Engineer(name, id, email)
        this.employee.gitHub = this.employee.getGithub().then(({github}) => {
            this.employee.gitHub = github
            console.log(this.employee);
            newTeam.push(this.employee);
            addEmployee()
        })

    })
}

getIntern = () => {
    console.log('adding intern...')
    getEmployeeData().then(({name, id, email}) => {
        this.employee = new Intern(name, id, email)
        this.employee.school = this.employee.getSchool().then(({school}) => {
            this.employee.school = school
            console.log(this.employee);
            newTeam.push(this.employee);
            addEmployee()
        })
    })
}

chooseRole = () => {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'role',
                message: 'Would you like to add an engineer or an intern?,',
                choices: ['engineer', 'intern'],
               validate: (employeeTypeInput) => {
                    if (employeeTypeInput) {
                        return true
                    } else {
                        console.log('Please make a selection.')
                        return false
                    }
                }
            }
        )
        .then(answer => {
            const chosenRole = answer.role
            switch (chosenRole) {
                case 'engineer':
                    getEngineer()
                    break
                case 'intern':
                    getIntern()
                    break
            }
            
        })
}
addEmployee = () => {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'add',
                message: 'Would you like to add another employee?,',
                choices: ['add Employee', 'team is complete']
            }
        )
        .then(answer => {
            const addConfirm = answer.add
            console.log(addConfirm);
            switch (addConfirm) {
                case 'add Employee':
                    chooseRole()
                    break
                case 'team is complete':
                    writeHtml(newTeam)
                    console.log('You have generated your team!');    
            }
            
        })
}

writeHtml = (data) => {
    
    writeFile('Team', generateTeamHtml(data))
}


initialize()