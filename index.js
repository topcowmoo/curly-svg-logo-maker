const fs = require('fs');
const inquirer = require('inquirer');


// Array of questions

const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Enter up to three characters:",
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color by keyword or hexadecimal:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color by keyword or hexadecimal:',
    },
]

    console.log('Generated logo.svg');