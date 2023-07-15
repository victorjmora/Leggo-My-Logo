// Exports `Triangle`, `Circle`, and `Square` classes
const Circle = require('./Circle.js');
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');

function setShape(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
        if (response.shape === 'Square') {
            let userShape = new Square (response.shapeColor, response.text, response.textColor)
            return userShape.render()
        }

        if (response.shape === 'Triangle') {
            let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
            return userShape.render()
        }
    
    };
    module.exports = setShape;