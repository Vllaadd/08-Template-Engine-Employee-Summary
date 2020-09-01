const Employee = require('./Employee');

class Engineer extends Employee { //extends Employee because we use data from Employee file / class.
    constructor(name, id, email, github){
        super(name, id, email); //"super" is for when we take data from a different file.
        this.github = github;
        this.role = 'Engineer';
    }
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;

