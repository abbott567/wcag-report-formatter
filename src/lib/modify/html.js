const cheerio = require('cheerio')
const path = require('path')

const modifyHead = require(path.resolve('src', 'lib', 'modify', '_head'))
const modifySummaryBanner = require(path.resolve('src', 'lib', 'modify', '_summary-banner'))
const modifyTables = require(path.resolve('src', 'lib', 'modify', '_tables'))
const modifyTags = require(path.resolve('src', 'lib', 'modify', '_tags'))
const modifyLinks = require(path.resolve('src', 'lib', 'modify', '_links'))
const highlightJS = require(path.resolve('src', 'lib', 'modify', '_highlight'))

async function modifyHTML (html) {
  console.log('├─ Modifying HTML with custom attributes')
  const $ = cheerio.load(html)
  await modifyHead($)
  modifySummaryBanner($)
  modifyTables($)
  modifyTags($)
  modifyLinks($)
  highlightJS($)
  return $.html()
}

module.exports = modifyHTML
