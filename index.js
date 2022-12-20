// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const prompt = inquirer.createPromptModule();
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your project description?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",  
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "usage",  
    },
    {
      type: "input",
      message: "Who contributed to the project?",
      name: "contributing",  
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "test",  
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
    },
];

// TODO: Create a function to write README file
function writeToFile() {
    fs.appendFile("newREADME.md",
    `# ${questions.title}
    
    ## Description
    
    ${questions.description}
    
    ## Installation 
    
    ${questions.installation}
    
    ## Usage
    
    ${questions.usage}
    
    ## Contributers
    
    ${questions.contributing}
    
    ## Test
    
    ${questions.test}
    
    ## License
    
    ${questions.license}`)
};

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
      .then(writeToFile);
};

// Function call to initialize app
init();
