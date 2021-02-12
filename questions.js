const roles = [`Manager`, `Engineer`, `Intern`]

const questions = {
    startingQuestions: [
        {
            type: `input`,
            name: `name`,
            message: `What is the employee name?`,
        },
        {
            type: `input`,
            name: `id`,
            message: `What is the employee's id number?`,
        },
        {
            type: `input`,
            name: `email`,
            message: `What is the employee's email address?`,
        },
        {
            type: `list`,
            name: `role`,
            message: `What is the employee's role?`,
            choices: roles,
        },
    ],

    managerQuestions: [
        {
            type: `input`,
            name: `office`,
            message: `What is the manager's office number?`
        },
    ],

    engineerQuestions: [
        {
            type: `input`,
            name: `github`,
            message: `What is the engineer's github username?`
        },
    ],

    internQuestions: [
        {
            type: `input`,
            name: `school`,
            message: `What is the name of the school the student is studying at?`
        },
    ],
};




module.exports = questions;