//const inquirer = require('inquirer')
//const fs = require('fs')
// const Employee = require('./Employee')

// class Intern extends Employee {
//     constructor(school = "") {
//         super(school)
//     }
// }


//module.exports = Intern




//promot intern questions
// const internQuestions = (EmployeeData) => {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'school',
//             message: 'What school did the intern attend?'
//         },
//         {
//             type: 'confirm',
//             name: 'confirmBuildTeam',
//             message: 'Would you like to add to your team?',
//             default: false
//         }
//     ]).then(internData => {
//         //create new class-- manager.js make a new manager and then push the manager 
//         console.log(EmployeeData)
//         employees.push(internData);
//          if (internData.confirmBuildTeam) {
//              return promptUser()
//          } else {
//              return EmployeeData
//          }
//     }) .then(EmployeeData => {
//         fs.writeFile('./index.html', JSON.stringify(EmployeeData, null, '\t'), err => {
//             if (err) throw new Error(err);
//             console.log('html created')
//         })
//     })


// }


// module.exports = internQuestions















// function Intern(a, b) {
//     return a - b
// }


// module.exports = Intern


// ///if intern question is true, run this list of questions
// //use inquirer for prompts
// const inquirer = require('inquirer')

// class Intern extends Employee {
//     constructor(name = '') {
//         super(name)
//     }
// }







// //after these questions are answered the user needs to go back to would you like to build more to your team?
// //could ask the questions in each intern and engineer and then if it returns false print the back
// //if returns true then run intern or employee prompts again
// //but each new prompt needs to create a new employee card
// //you will need to use constructors to create each new employee based on the information provided
// //this is where functions are going to come in to create each employees card based on prompt questions


// //questions may just need to stay in index.js because engineer and intern will each have functions to create the cards
