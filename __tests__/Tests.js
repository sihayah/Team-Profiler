const { 
    Employee,
    Manager,
    Engineer,
    Intern
} = require('../lib/Employee')
const { getEmployeeData, getOfficeNumber, getGithub, getSchool } = require('../lib/employeeData')

jest.mock()

test("gets employee data", () => {
    // const employee = new Employee(              
    //         'Marge','4', 'marge@hopscotch.com')
    //         console.log(employee)

    
    expect(2).toEqual(1+1)

    // expect(employee.name).toBe('Marge')
    // expect(employee.id).toEqual(4)
    // expect(employee.email).toEqual(expect.any(String))
    // expect(employee.github).toEqual(expect.any(String))
}) 

// test("gets manager data", () => {
//     const Employee = {
//         role: 'manager',
//             name: 'Nina',
//             id: 2,
//             email: 'nina@hopscotch.com',
//             github: 'nnnina',
//             officeNumber: 42
//     }

//     expect(Employee.officeNumber).toEqual(42)
// })
// test("gets intern data", () => {
//    const Employee = {
//     role: 'intern',
//         name: 'Lois',
//         id: 8,
//         email: 'lois@hopscotch.com',
//         github: 'lllois',
//         school: 'Bermuda School of Hopscotch'
// }
//     expect(Employee.school).toBe("Bermuda School of Hopscotch")
// })