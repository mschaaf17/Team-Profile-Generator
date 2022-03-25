const inquirer = require('inquirer')
const fs = require('fs')
const managerQuestions = require('./Manager')
const internQuestions = require('./Intern')
const engineerQuestions = require('./Engineer')

function generateTeam() {
    //this will generate the employee information
}
//inital function to generate the employee 

//can this let be apart of employees class? so i can use it to extend to other employees?
const employees = []

//first questions prompt
// const generalEmployeeQuestions = EmployeeData => {
//     console.log('It is time to generate your team. Please answer the questions to build your team.')
//    return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'role',
//             message: "What the employee's role?(Required)",
//             choices: [{ name: 'Manager', value: 0 }, { name: 'Intern', value: 1 }, { name: 'Engineer', value: 2 }]
//             //based of this answer certain questions need to be prompted 
//         }

//     ])
// }


//questions to get the employee started 
const promptUser = EmployeeData => {
    console.log('Please answer the questions to build your team.')
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter an employee's name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?(Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What the employee's role?(Required)",
            choices: [{ name: 'Manager', value: 0 }, { name: 'Intern', value: 1 }, { name: 'Engineer', value: 2 }]
            //based of this answer certain questions need to be prompted 
        }
        
    ])
        .then((EmployeeData) => {
            if (EmployeeData.role === 0) {
                console.log('this employee is a manager!')
                managerQuestions(EmployeeData)
            } else if
                (EmployeeData.role === 1) {
                console.log('this employee is an intern')
                internQuestions()
            } else {
                console.log('this employee is an engineer')
                engineerQuestions()
            }
        }
        )
}
//set html for this user and then go to the correct team member questions 



//set up html for this added user


//set up html for this added user


//set up html for this added user

promptUser()
    

module.exports = {
    promptUser,
    employees
}