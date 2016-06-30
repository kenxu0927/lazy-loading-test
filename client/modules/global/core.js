import R from 'ramda'

// convertToCurrency :: String -> Float -> String
export const convertToCurrency = R.curry((currencySymbol, num) => {
  if (R.isNil(num)) { return '$0.00' }
  return currencySymbol + (num / 100).toFixed(2)
})

// convertToPercentage :: Integer -> Float -> String
export const convertToPercentage = R.curry((digits, num) => {
  if (R.isNil(num)) { return 'N/A' }
  return (num * 100).toFixed(digits) + '%'
})

// checkIsInteger :: * -> Boolean
export const checkIsInteger = R.curry(value => {
  if (isNaN(value)) { return false }
  var x = parseFloat(value)
  return (x | 0) === x
})
