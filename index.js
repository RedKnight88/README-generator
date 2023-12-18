// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", 
                "Please enter a description of your project.",
                "Please enter instructions for installation of your project.",
                "Please enter the usage information of your project.",
                "Please enter the contribution guidelines of your project.",
                "Please enter the testing instructions of your project.",
                "Please select the license of your project.",
                "What is your GitHub username?",
                "What is your email address?"
            ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer    
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'desc',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contr',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test',
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((response) => {
            // const newAnswers = JSON.stringify(response);

            // fs.writeFile('answers.json', newAnswers, (err) =>
            //     err ? console.error(err) : console.log("Answers Recorded."))
        });
}

// Function call to initialize app
init();
