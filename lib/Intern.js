function Intern(a, b) {
    return a - b
}


module.exports = Intern


///if intern question is true, run this list of questions
//use inquirer for prompts
const inquirer = require('inquirer')

//use writing file system to put info into html file
//const fs = require('fs')
//if engineer question is picked, run this list of questions

const promptUser = internData => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the intern's name? (Required)",
        validate:  nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name.");
                return false;
            }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the intern's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?(Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else { 
                    console.log("Please enter the intern's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern attend?'
        }
    ])
}



//after these questions are answered the user needs to go back to would you like to build more to your team?
//could ask the questions in each intern and engineer and then if it returns false print the back
//if returns true then run intern or employee prompts again
//but each new prompt needs to create a new employee card
//you will need to use constructors to create each new employee based on the information provided
//this is where functions are going to come in to create each employees card based on prompt questions


//questions may just need to stay in index.js because engineer and intern will each have functions to create the cards
