const removeFromArray = function(array, ...removedvalue){

const keptarray = []
for (let i = 0; i <array.length; i++)
if (!removedvalue.includes(array[i]))
keptarray.push(array[i])

return keptarray
}

// Do not edit below this line
module.exports = removeFromArray;
