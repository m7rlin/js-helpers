exports.upperCaseFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

exports.beginWithUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

exports.lowerCaseFirst = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

exports.removeExtraSpaces = (string) => {
  return string.trim().replace(/\s\s+/g, " ")
}

exports.mapValue = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
