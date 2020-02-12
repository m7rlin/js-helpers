exports.ucfirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
exports.lcfirst = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};
exports.removeExtraSpaces = string => {
  return string.trim().replace(/\s\s+/g, " ");
};
