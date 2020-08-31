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
            case 'Yes!!!':
        createEmployee();
        break;

        case 'Nope, that`s everyone!':
            createHTML();
            break;
        }
    });
}

function readEngFile(engineerData){
    fs.readFile('./html/engineer.html', 'utf8', function(error, data){
        const newData = data
        .replace('Ename:', engineerData.name)
        .replace('Eid:', engineerData.id)
        .replace('Memail:', engineerData.email)
        .replace('Mphone', engineerData.officeNumber);
        html += newData;
    });
}

function readMgnFile(managerData){
    fs.readFile('html/engineer.html', 'utf8', function(error, data){
        const newData = data
        .replace('Mname:', managerData.name)
        .replace('Mid:', managerData.id)
        .replace('Memail:', managerData)
        .replace('MofficeNumber:', managerData.officeNumber)
        html += newData;
    });
}

function readInternFile(internData){
    fs.readFile('./html/intern.html', 'utf8', function(error, data){
        const newData = data
        .replace('Iname:', internData.name)
        .replace('Iid', internData.id)
        .replace('Iemail', internData,internSchool);
        html += newData;
    })

}

function createHTML(){
    fs.readFile('./html/main.html', 'utf8', (error, data) => {
        const newData = data.replace('{{html}}', html);
        fs.writeFile('./output/index.html', newData, 'utf8', error => {
            if (error) 
            return console.log(error);
        });
    })
}

module.exports = {};

createEmployee();