const fs = require('fs')
const inquirer = require('inquirer');
const questions = require('./lib/questions')
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager');
const { async } = require('rxjs');

function createEmployee(){
    inquirer
    .prompt(questions.employeeQuestion)
    .then(answers => {
        switch(answers.role){
            case 'Engineer':
                inquirer
                .prompt(questions.engineerQuestion)
                .then(engineerAnswers => {
                    const engineerData = new Engineer(
                        answers.name,
                        answers.id,
                        answers.email,
                        engineerAnswers.github
                    );
                    readEngFile(engineerData);

                    restartInquirer();
                });
                break;
            case 'Manager':
                inquirer
                .prompt(questions.managerQuestion)
                .then(async managerAnswers =>{
                    const managerData = await new Manager(
                        answers.name,
                        answers.id,
                        answers.email,
                        managerAnswers.officeNumber
                    );
                    readMgnFile(managerData);

                    restartInquirer();
                });
            case 'Intern':
                inquirer 
                .prompt(questions.internQuestion)
                .then(async internAnswers => {
                    const internData = await new Intern(
                        answers.name,
                        answers.id,
                        answers.email,
                        internAnswers.internSchool
                    );
                    readInternFile(internData);

                    restartInquirer();
                });
                break;
        }
    })
    .catch(err => {
        throw err;
    });
}

function restartInquirer(){
    inquirer
    .prompt(questions.newQuestion)
    .then(answer => {
        switch (answer.role){
            case 'Yes!!!';
        createEmployee();
        break;

        case 'Nope, that`s everyone!':
            createHTML();
            break;
        }
    });
}

function readInternFile(internData){

}

function readMgnFile(managerData){

}

function readInternFile(internData){

}

function createHTML(){

}

module.exports = {};

createEmployee();