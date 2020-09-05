const employeeQuestions = [
    {
        type: 'input',
        message: 'What is the employee`s name?',
        name: 'name'
    },{
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id'
    },{
        type: 'input',
        message: 'What is the employee email?',
        name: 'email',
    },{
        type: 'list',
        message: "What is the job title?",
        name: 'role',
        choices: ['Engineer', 'Manager' ,'Intern']
    }

];

const engineerQuestion = [
    {
        type: 'input',
        message: 'What is the GitHub username?',
        name: 'github'
    }
];

const managerQuestion = [
    {
        type: 'input',
        message: 'What is the office phone number?',
        name: 'officeNumber'
    }
];

const internQuestion = [
    {
        type: 'input',
        message: 'What is the school name?',
        name: 'internSchool'
    }
];

const newQuestion = [
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        name: 'role',
        choices: ['Yes.', 'Nope, that`s everyone.']
    }
];

module.exports = {
    employeeQuestions,
    engineerQuestion,
    managerQuestion,
    internQuestion,
    newQuestion
};
