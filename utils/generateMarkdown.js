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
# ${response.title}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Test](#Test)
- [License](#License)
- [Questions](#Questions)

## Description\n
${response.description}

## Installation\n
${response.installation}
  
## Usage\n
${response.usage}\n

## Contributing\n
${response.contributing}
  
## Test\n
${response.test}
  
## License\n
${response.license}

## Questions\n
${response.question}`;
};

module.exports = generateMarkdown;
