const http = require('http')
const fs = require('fs-jetpack')
const express = require('express')
const bodyParser = require('body-parser')
const expressUpload = require('express-fileupload')
const path = require('path')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressUpload())

const homePage = fs.read('src/views/home.html')
const port = process.env.PORT || 3000

const loadHTML = require('./src/lib/load/html')
const modifyHTML = require('./src/lib/modify/html')
const saveHTML = require('./src/lib/save/html')

app.get('/', (req, res) => {
  fs.remove('public')
  fs.dir('public')
  res.send(homePage)
})

app.post('/upload', (req, res) => {
  const report = req.files.report
  const filename = report.name
  const uploadPath = path.resolve(__dirname, 'public', filename)
  if (!req.files || Object.keys(req.files).length === 0) return res.status(400).send('No files were uploaded.')

  report.mv(uploadPath, async function (err) {
    if (err) return res.redirect('/error')
    const rawHTML = await loadHTML(uploadPath)
    const modifiedHTML = await modifyHTML(rawHTML)
    await saveHTML(modifiedHTML, `formatted-${filename}`)
    res.download(`public/formatted-${filename}.html`)
  })
})

const server = http.createServer(app)
server.on('error', err => { throw err })
server.listen(port)
if (port === 3000) console.log(`Listening on http://localhost:${port}`)
