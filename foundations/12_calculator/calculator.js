const add = function(a,b) {
	let sum = a+b; 
  return sum
};

const subtract = function(a,b) {
	let diff = a-b
  return diff
};

const sum = function(array) {

  let sum = 0
  for (let i=0;i<array.length;i++){
    sum = sum + array[i]}
return sum

	
};

const multiply = function(array) {

let sum = 1
for (let i=0; i<array.length ; i++){
  sum = sum * array [i]}
return sum

};

const power = function(a,b) {

let sum = 1
for (let i = 0; i<b; i++){
    sum = sum*a}
    return sum
	
};

const factorial = function(a) {
  let sum = 1
  for (let i = a ; i>0; i--){
    sum = sum * (i)
  }
  return sum

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
