const Employee = require("./employee")
const Engineer = require('./engineer')
const Intern = require('./intern')
const Manager = require('./manager')

function constructorEmployeeCard(){
    `<div class="card" style="width: 18rem;">
    <div class="card-body justify-content-center">
        <h5 class="card-subtitle justify-content-center">${Employee.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses fa-2x"></i></h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Employee.id} </li>
            <li class="list-group-item">EMAIL:${Employee.email} </li>
        </ul>
    </div>
</div>`
}

function constructorEngineerCard(){
    `<div class="card" style="width: 18rem;">
    <div class="card-body justify-content-center">
        <h5 class="card-subtitle justify-content-center">${Engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses fa-2x"></i></h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Engineer.id} </li>
            <li class="list-group-item">EMAIL:${Engineer.email} </li>
            <li class="list-group-item">GITHUB: ${Engineer.github}</li>
        </ul>
    </div>
</div>`
}

function constructorInternCard(){
    `<div class="card" style="width: 18rem;">
    <div class="card-body justify-content-center">
        <h5 class="card-subtitle justify-content-center">${Intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses fa-2x"></i></h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Intern.id} </li>
            <li class="list-group-item">EMAIL:${Intern.email} </li>
            <li class="list-group-item">GITHUB: ${Intern.school}</li>
        </ul>
    </div>
</div>`
}

function constructorManagerCard(){
    `<div class="card" style="width: 18rem;">
    <div class="card-body justify-content-center">
        <h5 class="card-subtitle justify-content-center">${Manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses fa-2x"></i></h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.id} </li>
            <li class="list-group-item">EMAIL:${Manager.email} </li>
            <li class="list-group-item">GITHUB: ${Manager.officeNumber}</li>
        </ul>
    </div>
</div>`
}

module.exports = {
    constructorEmployeeCard,
    constructorEngineerCard,
    constructorInternCard,
    constructorManagerCard
}