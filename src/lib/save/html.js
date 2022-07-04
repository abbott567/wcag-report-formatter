const fs = require('fs-jetpack')

async function saveHTML (html, filename = 'output') {
  console.log('├─ Saving modified HTML to output.html')
  await fs.write(`public/${filename}.html`, html)
}

module.exports = saveHTML
