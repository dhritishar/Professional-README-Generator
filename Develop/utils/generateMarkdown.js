// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "no") {
    return `![GitHub License](https://shields.io/badge/license-$%7Blicense%7D-yellowgreen.svg)`;
  }
  return " ";
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n [License](#license)\n`;
  }
  return " ";
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none"){
    return `##License
    Licensed under the $(license) license.`;
  }
  return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.licence)}
  ##TableofContents
  *  [Description](#description)
  *  [Requirements](#requirements)
  *  [Usage](#usage)
  *  [Contact Me](#contact-me)
  *  [Contributors](#contributors)
  *  [Testing](#testing)
  ${renderLicenseLink(data.licence)}
  ##Description
  ${data.description}
  ##Requirements
  ${data.require}
  ##Usage
  ${data.usage}
  ##Contact-me
    name - ${data.name}
    email - ${data.email}
    GitHub - [${data.creator}](https://github.com/${data.creator}/)
  ##Contributors
  ${data.contributors}
  ##Testing
  \`\`\`
  ${data.test}
  \`\`\`
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
