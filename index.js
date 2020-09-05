const fs = require('fs') 
const inquirer = require('inquirer');  
const questions = require('./lib/questions');
let html = ''; 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function createEmployee(){
    inquirer
    .prompt(questions.employeeQuestions) 
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
                    readEngineerFile(engineerData);

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
                    readManagerFile(managerData);

                    restartInquirer();
                });
                break;
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

//ask the user to add another employee or create the html file 
function restartInquirer(){
    inquirer
    .prompt(questions.newQuestion)
    .then(answer => {
        switch (answer.role){
            case 'Yes.':
        createEmployee();
        break;

        case 'Nope, that`s everyone.':
            createHTML();
            break;
        }
    });
}

//read html role cards and replace with the value that the user input
function readEngineerFile(engineerData){  
    const icon = `<i class="fas fa-glasses fa-2x"></i>`;
    fs.readFile('./html/engineer.html', 'utf8', (error, data) => {
        const newData = data 
        .replace('Ename:', engineerData.name)
        .replace('Eicon:', icon)
        .replace('Eid', engineerData.id)
        .replace('Eemail', engineerData.email)
        .replace('Egithub', engineerData.github);
        html += newData;
    });
}

function readManagerFile(managerData){
    const icon = `<i class="far fa-chart-bar fa-2x"></i>`;
    fs.readFile('./html/manager.html', 'utf8', (error, data) => {
        const newData = data
        .replace('Mname:', managerData.name)
        .replace('Micon:', icon)
        .replace('Mid', managerData.id)
        .replace('Memail', managerData.email)
        .replace('Mphone', managerData.officeNumber);
        html += newData;
    });
}

function readInternFile(internData){
    // console.log(internData);
    const icon = `<i class="fas fa-eye fa-2x"></i>`;
    fs.readFile('./html/intern.html', 'utf8', (error, data) => {
        const newData = data
        .replace('Iname:', internData.name)
        .replace('Iicon:', icon)
        .replace('Iid', internData.id)
        .replace('Iemail', internData.email)
        .replace('Ischool', internData.school);
        html += newData;
    });

}

function createHTML(){
    fs.readFile('./html/mainFile.html', 'utf8', (err, data) => {
        const newData = data.replace('html', html);
        fs.writeFile('./index.html', newData, 'utf8', err => {
            if (err) 
            return console.log(err);
        });
        console.log('.html created');
    });
}

module.exports = {};

createEmployee();
