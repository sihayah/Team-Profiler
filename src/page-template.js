const fs = require('fs')
const testData = require('../data/employees.json')

const printCards = dataArr => {
        const printCards = dataArr.map(({ name, id, email, officeNumber, role, github, school }) => {
        console.log("printing", name)
        const renderEmployeeSpecific = function() {
          if(role === 'engineer'){
            return `gitHub: ${github}`
          }
          if(role === 'intern'){
            return `School: ${school}`
          }
          if(role === 'manager'){
            return `Office number: ${officeNumber}`
          }
        }
        return `    
            <div class = 'card mb-3 mr-3'>
                <div class= 'card-header bg-info text-white mb-3'>
                ${name} 
                <br>
                ${role}
                </div>

                <ul class="list-group bg-light p-3">
                <li class="list-group-item"> id: ${id}</li>
                <li class="list-group-item"> Email: ${email} </li>
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

  <link rel="stylesheet" href="./style.css" />
</head>

<body>
  <header class="py-4 mb-3">
    <div class="flex-row justify-space-between align-center container-fluid mx-auto">
      <h1 class="text-center text-light bg-danger p-3">My Team</h1>
    </div>
  </header>

  <main class="container-fluid mx-auto mb-3">


    <section class=" d-flex">

        ${printCards(dataArr)}

    </section>


  </main>

</body>

</html>
`
}

module.exports = { generateTeamHtml }

 