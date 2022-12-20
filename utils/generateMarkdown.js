// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}\n

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Test](#Test)
- [License](#License)
- [Questions](#Questions)

## Description\n
${response.description}\n

## Installation\n
${response.installation}\n
  
## Usage\n
${response.usage}\n

## Contributing\n
${response.contributing}\n
  
## Test\n
${response.test}\n
  
## License\n
${response.license}

## Questions\n
${response.question}`;
};

module.exports = generateMarkdown;
