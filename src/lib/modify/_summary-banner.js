async function modifySummaryBanner ($) {
  console.log('│  ├─ Modifying summary banner')
  const $summary = $('ul:first')

  console.log('│  │  ├─ Adding summary class to <ul>')
  $summary.addClass('summary')

  console.log('│  │  └─ Adding summary class to <li>\'s')
  $summary.find('li').each(function () {
    $(this).addClass('summary')
    $(this).find('span:first').addClass('number')
    $(this).find('span:last').addClass('label')
  })
}

module.exports = modifySummaryBanner
