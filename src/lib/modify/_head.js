const path = require('path')
const loadSass = require(path.resolve('src', 'lib', 'load', 'sass'))

async function modifyHead ($) {
  const css = await loadSass()
  console.log('│  ├─ Modifying <head>')
  console.log('│  │  ├─ Removing default <style> tags')
  $('head').find('style').remove()

  console.log('│  │  ├─ Appending compiled CSS to <head>')
  $('head').append(`<style>${css}</style>`)

  console.log('│  │  └─ Modifying <title>')
  const h1Text = $('h1').text()
  $('head').find('title').text(h1Text)
}

module.exports = modifyHead
