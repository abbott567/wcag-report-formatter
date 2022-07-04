async function modifyTags ($) {
  console.log('│  ├─ Adding govuk-tags')

  $('span').each(function () {
    const spanText = $(this).text()
    if (spanText === 'Result:') {
      $(this).addClass('govuk-visually-hidden')

      const $p = $(this).parent()
      $p.addClass('govuk-tag')

      const result = $p.text().replace(`${spanText}`, '')
      if (result.match(/Not present/)) $p.addClass('govuk-tag--grey')
      else if (result.match(/Not checked/)) $p.addClass('govuk-tag--grey')
      else if (result.match(/Passed/)) $p.addClass('govuk-tag--green')
      else if (result.match(/Failed/)) $p.addClass('govuk-tag--red')
      else {
        throw new Error(`A label showed a result you have not planned for: "${result}"`)
      }
    }
  })
}

module.exports = modifyTags
