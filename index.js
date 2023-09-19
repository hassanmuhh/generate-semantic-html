const semanticHtml = require('./semanticHtml')
const fs = require('fs');


/**
* Generates a semantic HTML file at the specified path.
*
* @param {string} path - The path where the file will be generated.
* @param {string} cssPath - The path where the file will be generated, If not defined no css link applied.
* @param {string} jsPath - The path where the file will be generated, If not defined no js link applied.
* @return {void} - This function does not return a value.
*/
function generateSemantic(path, cssPath, jsPath) {
  const content = semanticHtml(cssPath, jsPath)

  try {
    fs.writeFileSync(path, content)
    console.log('File Generated succefully');
  } catch (err) {
    console.log(err);
  }
}

// Call function with html path
module.exports = generateSemantic