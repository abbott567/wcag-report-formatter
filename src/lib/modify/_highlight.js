const hljs = require('highlight.js/lib/common')

async function highlightJS ($) {
  console.log('│  └─ Highlighting code blocks')
  $('code').each(function () {
    const content = $(this).text()
    $(this).html(hljs.highlightAuto(content).value)
  })
}

module.exports = highlightJS
