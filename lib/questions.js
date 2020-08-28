const employeeQuestion = [
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
        name: 'role',
        choices: ['Engineer', 'Intern', 'Manager']
    }
];

const engineerQuestion = [
    {
        name: 'input',
        message: 'What is the GitHub username?',
        name: 'gitHub'
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
        choice: ['Yes.', 'Nope, that`s everyone.']
    }
];

module.exports = {
    employeeQuestion,
    engineerQuestion,
    managerQuestion,
    internQuestion,
    newQuestion
}
