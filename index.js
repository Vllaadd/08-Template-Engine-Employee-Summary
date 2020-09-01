const fs = require('fs') // fs is necessary to read the data
const inquirer = require('inquirer'); //inquirer is an easily embeddable and beautiful command line interface. 
const questions = require('./lib/questions');
let html = ''; //empty string for the generated card data to be loaded to the html. It goes to mainFile.js. We give it a value after running the function for reading data for each card. 
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');

function createEmployee(){
    inquirer
    .prompt(questions.employeeQuestion) //here we reach to the "questions" file and go through the object with questions. 
    .then(answers => { //FUNCTION(ANSWERS){} ???
        switch(answers.role){
            case 'Engineer':
                inquirer
                .prompt(questions.engineerQuestion)
                .then(engineerAnswers => {
                    const engineerData = new Engineer( //here we create a new object with elements that will be input by the user. 
                        answers.name,
                        answers.id,
                        answers.email, //first three we use answers parameter as it`s from Employee file, not Engineer card. 
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

function readEngFile(engineerData){ //this is how  we read data in the html file for each role. 
    const icon = `<i class="fas fa-glasses fa-2x"></i>`;
    fs.readFile('./html/engineer.html', 'utf8', function(error, data){
        const newData = data //new variable that we create here consists of whatever values the users input. 
        .replace('Ename:', engineerData.name)
        .replace("Eicon:", icon)
        .replace('Eid:', engineerData.id)
        .replace('Eemail:', engineerData.email)
        .replace('Egithub', engineerData.github);
        html += newData;
    });
}

function readMgnFile(managerData){
    const icon = `<i class="far fa-chart-bar fa-2x"></i>`;
    fs.readFile('./html/manager.html', 'utf8', function(error, data){
        const newData = data
        .replace('Mname:', managerData.name)
        .replace("Micon:", icon)
        .replace('Mid:', managerData.id)
        .replace('Memail:', managerData.email)
        .replace('Mphone:', managerData.officeNumber)
        html += newData;
    });
}

function readInternFile(internData){
    const icon = `<i class="fas fa-eye fa-2x"></i>`;
    fs.readFile('./html/intern.html', 'utf8', function(error, data){
        const newData = data
        .replace('Iname:', internData.name)
        .replace("Iicon:", icon)
        .replace('Iid', internData.id)
        .replace('Iemail', internData.email)
        .replace('Ischool', internData.school);
        html += newData;
    })

}

function createHTML(){
    fs.readFile('./html/mainFile.html', 'utf8', (err, data) => {
        const newData = data.replace('{{html}}', html);
        fs.writeFile('./index.html', newData, 'utf8', err => {
            if (err) 
            return console.log(err);
        });
        console.log('.html created');
    });
}

module.exports = {};

createEmployee();


// 1. Index.js prompts the questions from questions.js file. 

// 2. (index.js) After the questions are answers, new object is built with the answers

// 3. (index.js / role.html) After we have this new object, we read the html employee card and use method “replace” to replace the the space in the card with the actual data

// 4. (index.js / mainFile.html) After the cards are replaced with the data we add that card into the html file (html += newData) 