const sass = require('node-sass')
const fs = require('fs-jetpack')
const path = require('path')

async function loadSass () {
  console.log('│  ├─ Rendering SASS')
  console.log('│  │  ├─ Loading application.scss from file')
  const scssFile = await fs.read('./src/sass/application.scss')
  console.log('│  │  ├─ application.scss file loaded')
  console.log('│  │  ├─ Compiling application.scss')
  const scss = sass.renderSync({
    data: scssFile,
    includePaths: [
      path.resolve('node_modules'),
      path.resolve('node_modules', 'govuk-frontend'),
      path.resolve('src', 'sass')
    ],
    outputStyle: 'compressed'
  })
  console.log('│  │  └─ application.scss compiled')
  return scss.css
}

module.exports = loadSass
