# Leggo-My-Logo

## Description
Generate an SVG logo with your choice of shape (circle, square, or triangle), shape color, text (limit of 3 characters), and text color. Shape and text colors can be chosen using color keywords or hexadecimal numbers.
## Video
https://drive.google.com/file/d/1Ngj3-GWn3moSiPWrMAQRt_Pg-OiZLQWd/view

* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Installation
Check if you have Node.js installed by typing "node -v" in your command line. If node is not installed, visit the Node.js website to install. Next, clone this project repository to your computer. Use the command "npm install" to install dependecies. Use the command "npm install --save-dev jest" to install Jest as a devDependency.

## Usage
Change directories to your new project folder in the terminal. Invoke the application by typing "node index.js" or by typing the script "npm start" in the terminal's command line. You will be asked a series of questions before your logo is generated. If you do not enter a valid color keyword or hexadecimal number, you will be prompted to try again. If your text contains more than 3 characters, you will be prompted to try again. Once all prompts have been answered with accepted values, your new logo will be generated with the file name 'logo.svg' in the 'examples' folder. Refer back to the video posted in the description as needed.

## License
MIT License

## Contributing
This project was created as a challenge assignment for the UT Full Stack Boot Camp. Contact me with any ideas or requests.

## Tests
Each shape class (Circle, Square, and Triangle) is tested for a render() method that returns a string for the corresponfing SVG file matching color and text requests. Type "npm test" in the command line and Jest will run all three tests.

## Questions
Ask questions by contacting me at:

Github victorjmora

Email victorjmora1@gmail.com