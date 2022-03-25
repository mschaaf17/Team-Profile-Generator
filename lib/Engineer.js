 
 const inquirer = require('inquirer')
 const fs = require('fs')
 const { employees } = require('./Employee')


 //Engineer questions
const engineerQuestions = (EmployeeData) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your github username.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmBuildTeam',
            message: 'Would you like to add to your team?',
            default: false
        }
    ]).then(engineerData => {
        //create new class-- manager.js make a new manager and then push the manager 
        //this is how undefined!
        console.log(EmployeeData)
        employees.push(engineerData);
         if (engineerData.confirmBuildTeam) {
             return promptUser()
         } else {
             return EmployeeData
         }
    }) .then(EmployeeData => {
        fs.writeFile('./index.html', JSON.stringify(EmployeeData, null, '\t'), err => {
            if (err) throw new Error(err);
            console.log('html created')
        })
    })
}



 module.exports = engineerQuestions


// function Engineer(array) {
//     return [...array]
// }