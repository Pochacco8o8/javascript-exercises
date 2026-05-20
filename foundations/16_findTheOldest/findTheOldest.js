const findTheOldest = function(people) {

   

    for ( let i = 0 ; i <people.length ; i++){ // start at 0 and go on until u reach lenght of the people array. go up by one each loop.
        if ('yearOfDeath' in people[i]){
        //exists
                people[i].age = people[i].yearOfDeath - people[i].yearOfBirth; 

        }
        //the age of each people in the arrray if calc by the yod - yob of each bperson
        else{
            people[i].age = new Date().getFullYear() - people[i].yearOfBirth;
        }    
    }




    let sortedage = []
    //create a new array to that sorts the age to find the oldest - will be end or start
    sortedage = people.sort((a,b) => b.age-a.age);
    // put the sort into the array. a and b of age are selected arbitrarly
    console.log(sortedage)
    // see what the array is


    return sortedage[0]
    //return the oldest based on what you see
}

// Do not edit below this line
module.exports = findTheOldest;
