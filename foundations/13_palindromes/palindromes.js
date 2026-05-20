const palindromes = function (string) {
    let array = string.split ('')
    let reversedArray = array.reverse()
    let reversedstring = reversedArray.join('').toLowerCase().replace(/[^a-z0-9]/gi, '')

    let newstring = string.toLowerCase().replace(/[^a-z0-9]/gi, '')
console.log(newstring,reversedstring)

    if (newstring == reversedstring){
        return true
    }else{      
          return false
}



};

// Do not edit below this line
module.exports = palindromes;
