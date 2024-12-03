const convertToCelsius = function () {
  const f = arguments[0];
  let float = (f - 32) * (5 / 9)
  return float.toFixed(1) * 1
};

const convertToFahrenheit = function () {
  const c = arguments[0];

  let float = (c * (9 / 5) + 32)
  return float.toFixed(1) * 1
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
