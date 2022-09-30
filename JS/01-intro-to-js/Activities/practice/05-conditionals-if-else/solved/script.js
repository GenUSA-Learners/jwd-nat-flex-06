console.log('Your JS file is linked!');

// The FizzBuzz Problem
// Create variable myNumber
// Check that the value of the myNumber is of type number
// If myNumber is not a number, print 'This is not a number' to the console.
// If value of myNumber is a multiple of 3 print 'Fizz' to the console
// If value of myNumber is a multiple of 5 print 'Buzz' to the console
// If the value of myNumber is a multiple of both 3 and 5 (ex. 15) print FizzBuzz to the console
// If the value of myNumber is any other number print the value of myNumber to the console.

//Write your code for FizzBuzz below this line:
let myNumber = 30;

if(typeof myNumber !== 'number'){
	console.log('This is not a number');
}else if(myNumber%15 === 0){
	console.log('FizzBuzz');
}else if(myNumber%3 === 0){
	console.log('Fizz');
}else if(myNumber%5 === 0){
	console.log('Buzz');
}else{
	console.log(myNumber);
};

const expression1 = (myNumber % 3 === 0);
const expression2 = (myNumber % 5 === 0);
