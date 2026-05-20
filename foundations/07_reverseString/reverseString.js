const reverseString = function(string) {

    const splittoarray =  string.split('')
    const revarray = splittoarray.reverse()
    const arraytostring = revarray.join('')

    return arraytostring
};

// Do not edit below this line
module.exports = reverseString;
