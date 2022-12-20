// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License: ${encodeURIComponent(license)}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(license)})`
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[${encodeURIComponent(license)}](https://choosealicense.com/licenses/${encodeURIComponent(license)}/`
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${renderLicenseLink(license)} license.`;
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}

${renderLicenseBadge(response.license)}

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
${renderLicenseSection(response.license)}

## Questions\n
${response.question}`;
};

module.exports = generateMarkdown;
