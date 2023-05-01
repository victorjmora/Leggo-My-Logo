const Shape = require('./shape.js')

class Triangle extends Shape {
    constructor(shapeColor,text, textColor) {
        super(textColor, shapeColor, text);
    };
    render() {
        return `
        <svg version='1.1'
        width='300' height='200'
        xmls='http://www.w3.org/2000/svg'>
            <circle cx='150' cy='100' r='100' fill='${this.shapeColor}'/>
            <text x='150' y='125' font-size='50' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
            </svg>
        `
    };
};

module.exports = Triangle;