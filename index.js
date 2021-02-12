const inquirer = require(`inquirer`);
const fs = require(`fs`);
const Employee = require(`./lib/Employee`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const questions = require(`./questions`);


function main() {
    console.log("Welcome to TeenTitans, a team roster app!");
    console.log("Please answer the following questions to build your roster:");

    inquirer.prompt(questions.startingQuestions).then((answers) => {
        switch (answers.role) {
            case `Manager`:
                inquirer.prompt(questions.managerQuestions);
                break;
            case `Engineer`:
                inquirer.prompt(questions.engineerQuestions);
                break;
            case `Intern`:
                inquirer.prompt(questions.internQuestions);
                break;
        }
    });

}


main();
