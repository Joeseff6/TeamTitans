const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Employee = require(`./lib/Employee`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const questions = require(`./questions`);
const choices = [`yes`,`no`];
const buildHTML = require(`./src/html`)
let employees = [];

console.log("Welcome to TeamTitans, a team roster app!");
console.log("Please answer the following questions to build your roster:");

function main() {
    inquirer.prompt(questions.startingQuestions).then((answers) => {
        let newEmployee = new Manager(answers.managerName, answers.managerId,answers.managerEmail,answers.managerOffice)
        addEmployee(newEmployee)
    });
}

const employeeQuestions = () => {
    inquirer.prompt(questions.employeeQuestions).then((answers) => {
        switch (answers.role) {
            case `Manager`:
                inquirer.prompt(questions.managerQuestions).then((newAnswer) => {
                    let newEmployee = new Manager(answers.name, answers.id,answers.email,newAnswer.office)
                    addEmployee(newEmployee)
                });
                break;
            case `Engineer`:
                inquirer.prompt(questions.engineerQuestions).then((newAnswer) => {
                    let newEmployee = new Engineer(answers.name, answers.id,answers.email,newAnswer.github)
                    addEmployee(newEmployee)
                });
                break
            case `Intern`:
                inquirer.prompt(questions.internQuestions).then((newAnswer) => {
                    let newEmployee = new Intern(answers.name, answers.id,answers.email,newAnswer.school)
                    addEmployee(newEmployee)
                });
                break
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
        }
    ])
    .then((answers) => {
        if (answers.choice === `yes`) {
            employeeQuestions()
        } else {
            console.log(`Thank you for using TeamTitans!`)
            console.log(`Below are your team members:`)
            console.log(employees)
            const html = buildHTML()
            fs.writeFileSync(`./index.html`, html);
        }
    })
}

main();
