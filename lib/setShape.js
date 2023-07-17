// Exports `Triangle`, `Circle`, and `Square` classes
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

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