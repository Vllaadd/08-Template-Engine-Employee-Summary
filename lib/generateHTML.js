function constructorHtml(){
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/5f4b0fb1a5.js" crossorigin="anonymous" defer></script>
        <link rel="stylesheet" href="../style.css">
        <title>Employee Summary</title>
    </head>
    <body>
        <div class="container">
            <header>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <h1>My Team</h1>
                    </li>
                </ul>
            </header>
        </div>
    </body>
    </html>`;
}

function constructorEngineerCard(teamArr){
    teamArr.forEach((element, idx, Engineer) => {
		if (element === Engineer) {
			console.log(element, Engineer);
		}
    });
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="${Engineer.name}"></h5>
    <h6 class="card-subtitle mb-2 text-muted">Icon: ${Engineer.role}</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id:${Engineer.id}</li>
        <li class="list-group-item">Email:${Engineer.email}</li>
        <li class="list-group-item">GigHub:${Engineer.github}</li>
    </ul>
</div>
</div>`;
}

// function constructorEmployeeCard(teamArr){
//     teamArr.forEach((element, idx, Employee) => {
//         if(element === Employee){
//             console.log(element, Employee);
//         }
//     });
//     `<div class="card" style="width: 18rem;">
//     <div class="card-body justify-content-center">
//         <h5 class="card-subtitle justify-content-center">${Employee.name}</h5>
//         <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses fa-2x"></i></h6>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${Employee.id} </li>
//             <li class="list-group-item">EMAIL:${Employee.email} </li>
//         </ul>
//     </div>
// </div>`
// }



// function constructorInternCard(teamArr){
//     teamArr.forEach((element, idx, Intern) => {
// 		if (element === Intern) {
// 			console.log(element, Intern);
// 		}
// 	});
//     `<div class="card" style="width: 18rem;">
//     <div class="card-body justify-content-center">
//         <h5 class="card-subtitle justify-content-center">${Intern.name}</h5>
//         <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses fa-2x"></i></h6>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${Intern.id} </li>
//             <li class="list-group-item">EMAIL:${Intern.email} </li>
//             <li class="list-group-item">GITHUB: ${Intern.school}</li>
//         </ul>
//     </div>
// </div>`
// }

// function constructorManagerCard(teamArr){
//     teamArr.forEach((element, idx, Manager) => {
// 		if (element === Manager) {
// 			console.log(element, Manager);
// 		}
// 	});
//     `<div class="card" style="width: 18rem;">
//     <div class="card-body justify-content-center">
//         <h5 class="card-subtitle justify-content-center">${Manager.name}</h5>
//         <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-glasses fa-2x"></i></h6>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${Manager.id} </li>
//             <li class="list-group-item">EMAIL:${Manager.email} </li>
//             <li class="list-group-item">GITHUB: ${Manager.officeNumber}</li>
//         </ul>
//     </div>
// </div>`
// }

module.exports = {
    constructorHtml,
    // constructorEmployeeCard,
    constructorEngineerCard
    // constructorInternCard,
    // constructorManagerCard
};