const fs = require('fs-jetpack')

async function loadHTML (filename) {
  console.log('├─ Loading HTML from file')
  const html = await fs.read(filename)
  console.log('│  └─ HTML loaded')
  return html
}

module.exports = loadHTML
