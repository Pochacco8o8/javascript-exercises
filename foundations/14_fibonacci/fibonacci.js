const fibonacci = function(a) {
if (a<0){
    return "OOPS"
}
if (typeof a === "string")
    a = Number(a)

fSeries = [0,1]
for (let i = 1; i <a ; i++){

    sum = (fSeries[fSeries.length-1] + fSeries[fSeries.length-2])
    fSeries.push(sum)
    
}
return fSeries[a]
};

// Do not edit below this line
module.exports = fibonacci;
