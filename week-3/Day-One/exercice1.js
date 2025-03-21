// Exercise 1 : 
// List of people

//Part I - Review about arrays
//----1
const people = ["Greg", "Mary", "Devon", "James"];
let removeFirstItem = people.shift();
//console.log(removeFirstItem);

//----2
for (let index = 0; index < people.length; index++) {
    if(people[index]=='James'){
        people[index] = 'Jason'
    }
    
}
//console.log(people)

//----3
people.push("Yassine");
//console.log(people);

//----4
console.log(people.indexOf('Mary')) // index is 0 because we remove 'Gred'

//---5
// first get index of "Mary" and "my name" is already know is on the end
let maryIndex = people.indexOf('Mary');
const peopleCopy = people.slice(maryIndex+1, people.length-1);
//console.log(peopleCopy); 

//---6
//console.log(people.indexOf('Foo')) // index is -1 because not exist!

//----7
let last = people[people.length-1]
//console.log(last)
// relationship between the "index" of the last 
// element in the array and the "length" of the array?
// index it start from 0 but the length it give us number of element that is inside the array!



//Part II - Loops

//----1
for (let index = 0; index < people.length; index++) {
        console.log(people[index])
        if(people[index] == "Devon"){
         break;
        }
}


