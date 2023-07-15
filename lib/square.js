const Shape = require('./shape')

// child of shapre, renders square using svg template
class Square extends Shape {
    constructor(shapeColor,text, textColor) {
        super(textColor, shapeColor, text);
    };
    render() {
        return `
        <svg version='1.1'
        width='300' height='200'
        xmls='http://www.w3.org/2000/svg'>
            <rect width='200 height='200' fill='${this.shapeColor}'/>
            <text x='100' y='125' font-size='70' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
            </svg>
        `
    };
};

module.exports = Square;