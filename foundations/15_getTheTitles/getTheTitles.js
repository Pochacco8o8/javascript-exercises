const getTheTitles = function(books) {

let titlearray = []

for (i = 0; i < books.length ; i++){
    titlearray.push(books[i].title)}
    return titlearray

};

// Do not edit below this line
module.exports = getTheTitles;
