console.log('Your JS file is linked!');

// 1. Exercise Tracker
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:
const exercises = [
    "Push-ups",
    "Sit-ups",
    "Bear Crawls",
    "1 mile run",
    "60 second plank",
    "Burpees",
    "Jumping Jacks",
    "Squats",
    "Weighted Squats",
    "Inch Worms"
];

function randomExercises(num) {

    for(i = 0; i < num; i++){
        const arrayLength= exercises.length;
        const randomInt = Math.floor(Math.random()* arrayLength);
        const randExercise = exercises[randomInt];
        console.log(randExercise);
    }
}
randomExercises(4)


//2. FizzBuzz Function
//Write your code below this line:

const myNumber = 30; // change the value of this variable to test your code

const fizzBuzz = (upperLimit) =>{
    for(myNumber=1; myNumber<upperLimit; myNumber++){

		if(typeof myNumber !== 'number'){
			console.log('This is not a number');
		}else if(myNumber%15 === 0){
			console.log('FizzBuzz');
		}else if(myNumber%3 === 0){
			console.log('Fizz')
		}else if(myNumber%5 === 0){
			console.log('Buzz')
		}else{
			console.log(myNumber);
		};
    };
}
    fizzBuzz(20);

//3. E-Commerce Item list Function
//Write your code below this line:

let storeItem = function(item) {

    switch (item) {
    case 'shoes':
        console.log('Shoes are $50');
        break;
    case 'jeans':
        console.log('Jeans are $25');
        break;
    case 'hat':
        console.log('Hats are $12');
        break;
        case 'socks':
        console.log('Socks are $2');
        break;
    default:
        console.log('Invalid item');
        break;
    }
}
storeItem('shoes');
