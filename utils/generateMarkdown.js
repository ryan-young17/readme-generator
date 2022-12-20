function renderLicenseBadge(license) {
  if (license) {
    return `[![License: ${encodeURIComponent(license)}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(license)})`
  } else {
    return "";
  }
};

function renderLicenseLink(license) {
  if (license) {
    return `[${encodeURIComponent(license)}](https://choosealicense.com/licenses/${encodeURIComponent(license)}/)`
  } else {
    return "";
  }
};

function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${renderLicenseLink(license)} license.`;
  } else {
    return "";
  }
};

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

## Description
${response.description}

## Installation
${response.installation}
  
## Usage
${response.usage}

## Contributing
${response.contributing}
  
## Test
${response.test}
  
## License
${renderLicenseSection(response.license)}

## Questions
Contact me at ${response.email} if you have any questions.\n
GitHub: ${response.github}`;
};

module.exports = generateMarkdown;
