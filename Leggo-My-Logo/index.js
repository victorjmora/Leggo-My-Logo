//import inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('../lib/questions');
const fileName = './examples/logo.svg';
const setShape = require('../lib/shape');

function createLogo(response) {
    const svg = new setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
    })
    .catch(err => {
        console.log(err);
    });
    }

    init();

