import test from 'tape'
import {
  requiredValidator,
  integerValidator,
  rangeValidator
} from './core'

test('requiredValidator()', assert => {
  const inputValue = 'non-empty value'
  const actual = requiredValidator(inputValue)
  const expected = {valid: true, errorMsg: ''}

  assert.deepEqual(actual, expected,
    `requiredValidator() should return {valid: true, errorMsg: ''} if the
    given value is not empty`)

  const inputValue2 = ''
  const actual2 = requiredValidator(inputValue2)
  const expected2 = {valid: false, errorMsg: 'This field is required.'}

  assert.deepEqual(actual2, expected2,
    `requiredValidator() should return {valid: false, errorMsg: 'This field
    is required.'} if the given value is empty`)

  assert.end()
})

test('integerValidator()', assert => {
  const inputValue = 2
  const actual = integerValidator(inputValue)
  const expected = {valid: true, errorMsg: ''}

  assert.deepEqual(actual, expected,
    `integerValidator() should return {valid: true, errorMsg: ''} if the
    given value is a valid integer`)

  const inputValue2 = '2'
  const actual2 = integerValidator(inputValue2)
  const expected2 = {valid: true, errorMsg: ''}

  assert.deepEqual(actual2, expected2,
    `integerValidator() should return {valid: true, errorMsg: ''} if the
    given value is a valid integer even in a string type`)

  const inputValue3 = 'blah'
  const actual3 = integerValidator(inputValue3)
  const expected3 = {valid: false, errorMsg: 'The value must be an integer.'}

  assert.deepEqual(actual3, expected3,
    `integerValidator() should return {valid: false, errorMsg: 'The value must
    be an integer.'} if the given value is not a valid integer`)

  assert.end()
})

test('rangeValidator()', assert => {
  const range = [1, 10]
  const inputValue = 5
  const actual = rangeValidator(range, inputValue)
  const expected = {valid: true, errorMsg: ''}

  assert.deepEqual(actual, expected,
    `rangeValidator() should return {valid: true, errorMsg: ''} if the
    given value is within a given range`)

  const range2 = [0, 10]
  const inputValue2 = '5'
  const actual2 = rangeValidator(range2, inputValue2)
  const expected2 = {valid: true, errorMsg: ''}

  assert.deepEqual(actual2, expected2,
    `rangeValidator() should return {valid: true, errorMsg: ''} if the
    given value is within a given range even in a string type`)

  const range3 = [0, 10]
  const inputValue3 = 11
  const actual3 = rangeValidator(range3, inputValue3)
  const expected3 = {valid: false, errorMsg: 'The value must be between 0 and 10.'}

  assert.deepEqual(actual3, expected3,
    `rangeValidator() should return {valid: false, errorMsg: 'The value must be
    between [min] and [max].'} if the given value is not within a defined range.`)

  const range4 = [0, Infinity]
  const inputValue4 = -2
  const actual4 = rangeValidator(range4, inputValue4)
  const expected4 = {valid: false, errorMsg: 'The value must be greater than 0.'}

  assert.deepEqual(actual4, expected4,
    `rangeValidator() should return {valid: false, errorMsg: 'The value must be
    greater than [min]'} if the max range is Infinity and the given value is
    not within the range.`)

  assert.end()
})
