const arr1 = [1,2,3,4,5,6]
const arr2 = [7,8,3,3,"akash"]

// arr1.push(arr2);
const arr3 = arr1.concat(arr2);

// const all_values = [...arr1,...arr2]
// console.log(arr3);


const another_array = [1,2,3,[4,5,6],7,8,[6,5,[1,2]]];
const real_arr = another_array.flat(Infinity);
// console.log(real_arr);

console.log(Array.isArray("Akash")); //returns whether string is array or not
console.log(Array.from("Akash"));  // Converts the data type into an array

let score1=100;
let score2= 200;
let score3=300;

console.log(Array.of(score1,score2,score3));   // creates an array of given values in parenthesis
