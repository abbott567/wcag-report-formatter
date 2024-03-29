async function modifyTables ($) {
  console.log('│  ├─ Modifying tables')
  console.log('│  │  ├─ Adding classes to <th>s')
  $('table').each(function () {
    const $headings = $(this).find('th')
    $headings.each(function () {
      if ($(this).text() === 'Success Criterion') $(this).addClass('left')
      else if ($(this).text() === 'Result') $(this).addClass('left')
      else if ($(this).text() === 'Observations') $(this).addClass('right')
    })
  })

  console.log('│  │  └─ Adding "No observations added" to blank <td>s')
  $('td').each(function () {
    const text = $(this).text().replace(/\s/g, '')
    if (text.length === 0) $(this).html('<p>No observations added.</p>')
  })
}

// left 10% Success
// left 10% Result
// right 40% Obs
// right 40% Action plan

module.exports = modifyTables
