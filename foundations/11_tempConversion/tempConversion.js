const convertToCelsius = function(f) {
let c = (f-32)/1.8
let cels = Number(c.toFixed(1))
return cels
};

const convertToFahrenheit = function(c) {
let f = (c*1.8)+32
let far = Number(f.toFixed(1))
return far

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
