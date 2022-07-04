const path = require('path')
const wrapReferenceLinks = require(path.resolve('src', 'lib', 'modify', '_wrap-reference-links'))

async function modifyLinks ($) {
  wrapReferenceLinks($)

  console.log('│  ├─ Adding govuk-link to anchors')

  $('a').each(function () {
    $(this).addClass('govuk-link')
  })
}

module.exports = modifyLinks
