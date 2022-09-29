console.log('linked');

// Write your code below

// Q1 Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. The cleanNames() function should use the array map method to return a new array full of trimmed names(hint: string method .trim. For example:

//   cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "])
//   should give
//   ["avengers", "captain_america", "ironman", "black panther"]

const names = [" avengers", "   captain_america", "ironman   ", " black panther   "];

function cleanNames(arr){
  return arr.map(n => n.trim());
}

const cleanArray = cleanNames(names);
console.log(cleanArray);

console.log(names.map(n => n.trim()));



// Q2 Write a function convertMilesToKilometers that uses an array as a parameter. Using the map() function and returns a new array, kilomArray, with miles converted to kilometers. Then using the reduce()  function add up all the items in the kilomArray and return it to the variable- totalDistanceInKilometers.  Console.log  totalDistanceInKilometers with only 2 decimal places!

// Conversion to km-  mile*1.609

const milesArray = [30, 12, 16, 20, 35];

function convertMilesToKilometers(arr){
  return arr.map(miles => miles *1.609);
}

const kilamArray = convertMilesToKilometers(milesArray);
// console.log(kilamArray);

const totalDistanceInKilometers = kilamArray.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
} )

console.log(totalDistanceInKilometers.toFixed(2) + ' total kms');
