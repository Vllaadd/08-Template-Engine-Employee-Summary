class Employee {
    constructor(name, id, email){ //the purpose of the constructor is to initialize the object of a class
        this.name = name;
        this.id = id;
        this.email = email,
        this.role = 'Employee';
    }
    getName() {
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Employee;