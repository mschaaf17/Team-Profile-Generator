const inquirer = require('inquirer')
const fs = require('fs')
const { employees } = require('./Employee')

// const  = new Employee("Big Al's Toy Barn", toys);

//prompt manager questions
const managerQuestions = (EmployeeData) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?'
        },
        {
            type: 'confirm',
            name: 'confirmBuildTeam',
            message: 'Would you like to add to your team?',
            default: false
        }
    ]).then(managerData => {
        //create new class-- manager.js make a new manager and then push the manager 
        console.log(EmployeeData)
        //can i use employee if exported from index?
        employees.push(managerData);
        if (managerData.confirmBuildTeam) {
            return promptUser()
        } else {
            return EmployeeData
        }
        
    }).then(EmployeeData => {
        fs.writeFile('./index.html', JSON.stringify(EmployeeData, null, '\t'), err => {
            if (err) throw new Error(err);
            console.log('html created')
        })
    })
}

module.exports = managerQuestions