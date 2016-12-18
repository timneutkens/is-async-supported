const { exec } = require('shelljs')

const checkCode = `
  const isAsyncSupported = require('./index')
  console.log(isAsyncSupported())
`

test('With harmony', () => {
  const executed = exec(`echo "${checkCode}" | node --harmony-async-await`)
  expect(executed.code).toBe(0)
  expect(executed.stdout.trim()).toBe('true')
})

test('Without harmony', () => {
  const executed = exec(`echo "${checkCode}" | node`)
  expect(executed.code).toBe(0)
  expect(executed.stdout.trim()).toBe('false')
})
