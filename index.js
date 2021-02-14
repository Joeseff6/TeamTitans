const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Employee = require(`./lib/Employee`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const questions = require(`./questions`);
const choices = [`yes`,`no`];
let employees = [];

console.log("Welcome to TeamTitans, a team roster app!");
console.log("Please answer the following questions to build your roster:");

function main() {
    inquirer.prompt(questions.startingQuestions).then((answers) => {
        let newEmployee = new Manager(answers.managerName, answers.managerId,answers.managerEmail,answers.managerOffice);
        addEmployee(newEmployee);
    });
}

const employeeQuestions = () => {
    inquirer.prompt(questions.employeeQuestions).then((answers) => {
        switch (answers.role) {
            case `Manager`:
                inquirer.prompt(questions.managerQuestions).then((newAnswer) => {
                    let newEmployee = new Manager(answers.name, answers.id,answers.email,newAnswer.office);
                    addEmployee(newEmployee);
                });
                break;
            case `Engineer`:
                inquirer.prompt(questions.engineerQuestions).then((newAnswer) => {
                    let newEmployee = new Engineer(answers.name, answers.id,answers.email,newAnswer.github);
                    addEmployee(newEmployee);
                });
                break;
            case `Intern`:
                inquirer.prompt(questions.internQuestions).then((newAnswer) => {
                    let newEmployee = new Intern(answers.name, answers.id,answers.email,newAnswer.school);
                    addEmployee(newEmployee);
                });
                break;
        }
    })
}

const addEmployee = (newEmployee) => {
    employees.push(newEmployee);
    inquirer.prompt([
        {
            type: `list`,
            name: `choice`,
            message: `Do you want to add an employee?`,
            choices: choices,
        },
    ])
    .then((answers) => {
        if (answers.choice === `yes`) {
            employeeQuestions();
        } else {
            console.log(`Thank you for using TeamTitans!`);
            console.log(`Below are your team members:`);
            console.log(employees);
            const rosterCards = employees.map(employee => employeeType(employee));
            const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Roster</title>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Serif:wght@700&display=swap" rel="stylesheet">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
                <link rel="stylesheet" href="./style.css">
            </head>

            <body>
                <div class="container-fluid">
                    <header class="row shadow p-3 mb-5 rounded">
                        <h1 class="m-auto">Team Roster</h1>
                    </header>

                    <div class="row d-flex justify-content-center" id="rosterSection">
                        <div class="row d-flex justify-content-center">
                            ${rosterCards.join("")}
                        </div>
                    </div>
                </div>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
            </body>
            </html>
            `;

            fs.writeFileSync(`./index.html`, html);
        }
    })
}


const employeeType = employee => {
    if (employee.getRole() === `Manager`) {
        let text =
            `<div class="col-sm-3 m-auto my-2 mx-2 employeeBox shadow">
                <div class="row boxHeader rounded">
                    <h3>${employee.name}</h3>
                    <h4><i class="fas fa-user-tie"></i> ${employee.getRole()}</h4>
                </div>
                <div class="row">
                    <span>ID: ${employee.getId()} </span>
                </div>
                <div class="row">
                    <span>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></span>
                </div>
                <div class="row">
                    <span>Office Number: ${employee.getOfficeNumber()}</span>
                </div>
            </div>`;
        return text;
    } else if (employee.getRole() === `Engineer`) {
        let text =
            `<div class="col-sm-3 m-auto my-2 mx-2 employeeBox shadow">
                <div class="row boxHeader rounded">
                    <h3>${employee.name}</h3>
                    <h4><i class="fas fa-pencil-ruler"></i> ${employee.getRole()}</h4>
                </div>
                <div class="row">
                    <span>ID: ${employee.getId()} </span>
                </div>
                <div class="row">
                    <span>Email: <a href="mailto:${employee.email}">${employee.getEmail()}</a></span>
                </div>
                <div class="row">
                    <span>Github: <a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a></span>
                </div>
            </div>`;
        return text;
    } else {
        let text =
            `<div class="col-sm-3 m-auto my-2 mx-2 employeeBox shadow">
                <div class="row boxHeader rounded">
                    <h3>${employee.name}</h3>
                    <h4><i class="fas fa-school"></i> ${employee.getRole()}</h4>
                </div>
                <div class="row">
                    <span>ID: ${employee.getId()} </span>
                </div>
                <div class="row">
                    <span>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></span>
                </div>
                <div class="row">
                    <span>School: ${employee.getSchool()}</span>
                </div>
            </div>`;
        return text;
    }   
}

main();
