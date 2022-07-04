async function wrapReferenceLinks ($) {
  console.log('│  ├─ Wrap reference links to <a> tags')

  $('h2').each(function () {
    const text = $(this).text()
    if (text === 'Sample of audited web pages') {
      const $list = $(this).nextAll('ol:first')
      $list.find('li').each(function () {
        const link = $(this).find('span:last').text()
        $(this).wrapInner(`<a href="${link}"></a>`)
      })
    }
  })
}

module.exports = wrapReferenceLinks
