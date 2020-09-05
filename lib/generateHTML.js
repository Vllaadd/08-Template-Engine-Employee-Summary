function constructorHtml() {
	`<!DOCTYPE html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Aggregator</title>
    
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
    
        <script src="https://kit.fontawesome.com/5f4b0fb1a5.js" crossorigin="anonymous" defer></script>
    
    </head>
    
    <body>
        <style>
            .nav {
                height: 200px;
                background-color: rgba(65, 99, 71, 0.785);
                color: black;
                display: flex;
                align-items: center;
                border-radius: 0 0 10px 10px;
                margin-bottom: 50px;
            }
    
            .card {
                /* width:  */
                display: flex;
                justify-content: space-around;
                background-color: rgb(220, 192, 192);
                box-shadow: 2.5px 4px rgb(138, 137, 137);
            }
    
            .list-group-item {
                background-color: rgba(240, 240, 240, 0.913);
            }
    
            footer {
                position: absolute;
                width: 100%;
                bottom: 0;
                text-align: center;
            }
        </style>
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

module.exports = {
    constructorHtml,
    constructorEngineerCard
};