// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "What is your project description?",
    "What are the installation instructions?",
    "What is the usage information?",
    "Who contributed to the project?",
    "What are the test instructions?",
    "Choose a license for your project"
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt([
            {
              type: "input",
              message: "What is your project title?",
              name: "Project Title",  
            },
            {
              type: "input",
              message: "What is your project description?",
              name: "Description",  
            },
            {
              type: "input",
              message: "What are the installation instructions?",
              name: "Installation",  
            },
            {
              type: "input",
              message: "What is the usage information?",
              name: "Usage",  
            },
            {
              type: "input",
              message: "Who contributed to the project?",
              name: "Contributing",  
            },
            {
              type: "input",
              message: "What are the test instructions?",
              name: "Test Instructions",  
            },
            {
              type: "list",
              message: "Choose a license for your project",
              name: "license",
              choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause Simplified License",
                "BSD 3-Clause New or Revised License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense"],  
            }
        ])
        .then(function (response) {
            console.log(response);
        })
};

// Function call to initialize app
init();
