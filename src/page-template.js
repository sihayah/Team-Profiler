const fs = require('fs')
const testData = require('../data/employees.json')

const printCards = dataArr => {
        const printCards = dataArr.map(({ name, id, email, officeNumber, role, github, school }) => {
        console.log("printing", name)
        const renderIcon = function() {
          if(role === 'Engineer'){
            return `<i class="fas fa-glasses"></i> `
          }
          if(role === 'Intern'){
            return `<i class="fas fa-user-graduate"></i> `
          }
          if(role === 'Manager'){
            return `<i class="fas fa-mug-hot"></i> `
          }
        }
        const renderEmployeeSpecific = function() {
          if(role === 'Engineer'){
            return `gitHub: <a target=”_blank” href ="https://github.com/${github}"> ${github} </a>`
          }
          if(role === 'Intern'){
            return `School: ${school}`
          }
          if(role === 'Manager'){
            return `Office number: ${officeNumber}`
          }
        }
        return `    
            <div class = 'card mr-3'>
                <div class= card-header '>
                <span>
                  ${name} 
                </span>
                <br>
                ${renderIcon(role)}${role}
                </div>

                <ul class="list-group p-3">
                <li class="list-group-item"> ID: ${id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item"> ${renderEmployeeSpecific(role)} </li>
              </ul>
            </div>
            `
    });
    return printCards.join(' ')

}

const generateTeamHtml = dataArr => {
    if (!dataArr) {
        return ''
    }
    
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Team</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/v4-shims.css">

  <link rel="stylesheet" href="./style.css" />
</head>

<body>
  <header class="py-4 mb-3">
    <div class="flex-row justify-space-between align-center container-fluid mx-auto">
      <h1 class="text-center p-3">My Team</h1>
    </div>
  </header>

  <main class="container-fluid mx-auto mb-3">


    <section class="card-holder d-flex">

        ${printCards(dataArr)}

    </section>


  </main>

</body>

</html>
`
}

module.exports = { generateTeamHtml }

 