//import inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = './examples/logo.svg';
const shapes = require('./lib/shapes.js');

function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createlogo(response);
    })
    .catch(err => {
        console.log(err);
    });
    }

    init();
