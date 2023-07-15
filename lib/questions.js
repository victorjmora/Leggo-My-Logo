const colorKeyWords = require('./colorKeywords')

const questions = [
    //shape questions
    {
        name: 'shape',
        message: 'what kind of shape do you want your logo to be?',
        type: 'list',
        choices: ['square', 'circle', 'triangle'],
    },

    //shape color choice
    {
        name: 'shapeColorChoice',
        message: 'What color do you want your shape to be',
        type: 'list',
        choices: ['hexadecimal','color keyword'],
    },

    //keyword color
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What do you wanr your shape color keyword to be',
        when: (answers) => {
            if(answers.colorKeyWords === 'colorKeyWords') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowercase();
            for(var i = 0, len = colorKeyWords.length; i < len; ++i) {
                if(answerLowercase.indexOf(colorKeyWords[i]) !=-1) {
                    return true;
                }}
                return console.log('\n Please enter a valid color keyword')
            }
        },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'what is the shape hexadecimal number (#CCCCCC)',
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
    },
    validate: (answer) => {
        const hexRegEx = '^#[A-Fa-f0-9]{6}$'
        if (!answer.match(hexRegEx)) {
            return console.log('\n Please enter a valid hexadecimal')
        }
    return true;
    },
    //text
    },
    {
        name: 'text',
        message: 'what is the text going to be? (Up to three characters)',
        type: 'input',
        validate: (answer) => {
            if(answer.length > 3) {
                return console.log('\n Text must be three characters or less! please try again');
            } 
            return true;
        }
    },

    {
        name:'textColorChoice',
        message: 'what is the text color? choose a color format:',
        type: 'list',
        choices: ['color keyword', 'hexadecimal'],
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color keyword',
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeyWords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeyWords[i]) !=-1) {
                    return true;
                }}
                return console.log('\n Please enter a valid color keyword');
            }
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color hexadecimal #CCCCCC',
            when: (answers) => {
                if(answers.textColorChoice === 'hexadecimal') {
                    return true;
        }
        return false;
    },
    validate: (answer) => {
        const hexRegEx = '^#[!-Fa-f0-9]{6}$'
        if(!answer.match(hexRegEx)) {
            return console.log('\n Please enter a valid hexadecimal');
        }
        return true;
    }
},

];

module.exports = questions;