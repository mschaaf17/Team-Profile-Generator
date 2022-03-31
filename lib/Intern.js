//const inquirer = require('inquirer')
//const fs = require('fs')
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.school = school
    }
    getSchool() {
        return this.school
    }
}


module.exports = Intern














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
