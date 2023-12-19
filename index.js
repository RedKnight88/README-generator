// Includes packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
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


// A function to initialize app
function init() {
    // Uses inquirer package to receive user input from Command Line Interface
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
                choices: ["Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause \"Simplified\" License",
                "BSD 3-Clause \"New\" or \"Revised\" License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 1.0",
                "GNU Affero General Public License v3.0",
                "GNU Lesser General Public License v3.0",
                "Mozilla Public License 2.0",
                "The Unlicense"],
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
            // Calls function from other script to generate markdown in a string
            const newMarkdown = generateMarkdown(response);

            // Takes markdown from string
            fs.writeFile('README.md', newMarkdown, (err) =>
                err ? console.error(err) : console.log("Your README file is ready!"))
        });
}

// Function call to initialize app
init();
