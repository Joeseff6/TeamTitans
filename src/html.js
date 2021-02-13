const buildHTML = () => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Serif:wght@700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <header class="row shadow p-3 mb-5 rounded">
                <h1 class="m-auto">Team Roster</h1>
            </header>
    
    
            <div class="row d-flex justify-content-center">
                <div class="col-sm-3 m-auto my-2 mx-2 employeeBox shadow" data-employee="1">
                    <div class="row boxHeader rounded">
                        <h3>Jared</h3>
                        <h4><i class="fas fa-user-tie"></i> Manager</h4>
                    </div>
                    <div class="row">
                        <span>ID: </span>
                    </div>
                    <div class="row">
                        <span>Email: </span>
                    </div>
                    <div class="row">
                        <span>Office Number: </span>
                    </div>
                </div>
                <div class="col-sm-3 m-auto my-2 mx-2 employeeBox shadow" data-employee="2">
                    <div class="row boxHeader rounded">
                        <h3>Ashley</h3>
                        <h4><i class="fas fa-pencil-ruler"></i> Engineer</h4>
                    </div>
                    <div class="row">
                        <span>ID: </span>
                    </div>
                    <div class="row">
                        <span>Email: </span>
                    </div>
                    <div class="row">
                        <span>Github: </span>
                    </div>
                </div>
                <div class="col-sm-3 m-auto my-2 mx-2 employeeBox shadow" data-employee="2">
                    <div class="row boxHeader rounded">
                        <h3>Bob</h3>
                        <h4><i class="fas fa-school"></i> Intern</h4>
                    </div>
                    <div class="row">
                        <span>ID: </span>
                    </div>
                    <div class="row">
                        <span>Email: </span>
                    </div>
                    <div class="row">
                        <span>School: </span>
                    </div>
                </div>
            </div>
        </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
        <script src="../index.js"></script>
    </body>
    </html>
`


module.exports = buildHTML;

