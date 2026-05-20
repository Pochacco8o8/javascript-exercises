const sumAll = function(first,last) {


if (typeof first != "number" || !Number.isInteger(first) || first<=0)
   { console.error("Error!")
return "ERROR"}
if (typeof last != "number" || !Number.isInteger(last) || last <=0)
{console.error("Error");
return "ERROR"}


let sum = 0
for (let i=first;i>=last;i--){
    console.log(sum)
 sum = sum + i
}
console.log(sum)

return sum

}



// Do not edit below this line
module.exports = sumAll;
