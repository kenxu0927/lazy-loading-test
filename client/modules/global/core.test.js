import test from 'tape'
import {
  convertToCurrency,
  convertToPercentage,
  checkIsInteger
} from './core'

test('convertToCurrency()', assert => {
  const currencySymbol = '$'
  const num = 2200
  const actual = convertToCurrency(currencySymbol, num)
  const expected = '$22.00'

  assert.equal(actual, expected,
    `convertToCurrency() should convert an integer to a currency format`)

  const currencySymbol2 = '$'
  const num2 = 220.0
  const actual2 = convertToCurrency(currencySymbol2, num2)
  const expected2 = '$2.20'

  assert.equal(actual2, expected2,
    `convertToCurrency() should convert a floating number to a currency format`)

  const currencySymbol3 = '$'
  const num3 = undefined
  const actual3 = convertToCurrency(currencySymbol3, num3)
  const expected3 = '$0.00'

  assert.equal(actual3, expected3,
    `convertToCurrency() should output $0.00 if the given value is undefined`)

  assert.end()
})

test('convertToPercentage()', assert => {
  const digits = '1'
  const num = 1
  const actual = convertToPercentage(digits, num)
  const expected = '100.0%'

  assert.equal(actual, expected,
    `convertToPercentage() should convert an integer to a percentage format`)

  const digits2 = '2'
  const num2 = 0.12
  const actual2 = convertToPercentage(digits2, num2)
  const expected2 = '12.00%'

  assert.equal(actual2, expected2,
    `convertToPercentage() should convert a floating number to a percentage
    format`)

  const digits3 = '1'
  const num3 = undefined
  const actual3 = convertToPercentage(digits3, num3)
  const expected3 = 'N/A'

  assert.equal(actual3, expected3,
    `convertToPercentage() should output N/A if the given value is undefined`)

  assert.end()
})

test('checkIsInteger()', assert => {
  const validValues = [42, '42', 4e2, ' 1 ']
  const invalidValues = ['', ' ', 42.1, '1a', '4e2a', null, undefined, NaN]

  validValues.forEach(value => {
    const actual = checkIsInteger(value)
    const expected = true
    assert.equal(actual, expected,
      `Given a valid integer (either in Number or String type),
      checkIsInteger() should return true`)
  })

  invalidValues.forEach(value => {
    const actual2 = checkIsInteger(value)
    const expected2 = false
    assert.equal(actual2, expected2,
      `Given an invalid integer in any type, checkIsInteger() should return
      true`)
  })

  assert.end()
})
