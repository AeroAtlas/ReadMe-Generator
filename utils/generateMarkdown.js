function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function renderTechnologies(tech) {
  return `<ul>\n` + tech.split(",").map(t => t.trim()).reduce((acc,curr) => {
    return acc + `  <li>${curr}</li>
` 
  }, "") + `</ul>`
}

function renderContributors(users) {
  return users.split(",").map(t => t.trim()).reduce((acc,curr) => {
    return acc + `[${curr}](https://github.com/${curr}/), `
  }, "")
}

function renderLiveLink(live){
  return live.toLowerCase() !== "none" 
    ? `
## Live Site
[${data.live}](https://${data.live}.herokuapp.com/)
`
  : ""
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Contributors

${renderContributors(data.users)}
${renderLiveLink(data.live)}
## Technologies

${renderTechnologies(data.tech)}

## Preview of Project

<img src="./${data.image}"></img>

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
