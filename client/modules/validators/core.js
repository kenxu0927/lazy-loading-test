import R from 'ramda'
import {checkIsInteger} from '../global/core'

/*
  validatorFunc (i.e. requiredValidator) = val => {
    valid: Boolean,
    errorMsg: String
  }
*/

// validateRequired :: String -> Boolean
const validateRequired = R.curry(val => !R.isEmpty(val))

// getValidateRequiredErrorMsg :: String -> String
const getValidateRequiredErrorMsg = R.curry(val => {
  return validateRequired(val) ? '' : 'This field is required.'
})

// requiredValidator => String -> {*}
export const requiredValidator = R.curry(val => {
  return {
    valid: validateRequired(val),
    errorMsg: getValidateRequiredErrorMsg(val)
  }
})

// validateInteger :: * -> Boolean
const validateInteger = R.curry(val => {
  if (R.isEmpty(val)) { return true }
  return checkIsInteger(val)
})

// getValidateIntegerErrorMsg :: String -> String
const getValidateIntegerErrorMsg = R.curry(val => {
  return validateInteger(val) ? '' : 'The value must be an integer.'
})

// integerValidator => String -> {*}
export const integerValidator = R.curry(val => {
  return {
    valid: validateInteger(val),
    errorMsg: getValidateIntegerErrorMsg(val)
  }
})

// validateRange :: String -> [Integer] -> Boolean
const validateRange = R.curry((range, val) => {
  return (val >= R.head(range)) && (val <= R.last(range))
})

// getValidateRangeErrorMsg :: String -> [Integer] -> {*}
const getValidateRangeErrorMsg = R.curry((range, val) => {
  const min = R.head(range)
  const max = R.last(range)
  if (max === Infinity) {
    return validateRange(range, val) ? '' : `The value must be greater than ${min}.`
  } else {
    return validateRange(range, val) ? '' : `The value must be between ${min} and ${max}.`
  }
})

// rangeValidator => String -> [Integer] -> {*}
export const rangeValidator = R.curry((range, val) => {
  return {
    valid: validateRange(range, val),
    errorMsg: getValidateRangeErrorMsg(range, val)
  }
})
