console.log("js file linked!");
// Create Arrays and print them to the console

// Write your code for Challenge 1 below
const seasonsRanked = ['Spring', 'Summer', 'Fall', 'Winter'];
const groceriesNeeded = ['toothpaste', 'milk', 'eggs', 'butter', 'snacks'];
const dataTypes = ['string', true, 25, undefined, null];

console.log(seasonsRanked);
console.log(groceriesNeeded);
console.log(dataTypes);

// write your code for Challenge 2 below

//1. reverse order seasons array
seasonsRanked.reverse();
console.log(seasonsRanked);

//2. remove last item groceries array
groceriesNeeded.pop();
console.log(groceriesNeeded);
//3. print length data types array
const length = dataTypes.length
console.log(length);

//4.


							// 0					// 1									// 2				// 3
//					[0][0]			[0][1]			[1][0]				[1][1]				[2][0]	[2][1]		[3][0]		[3][1]		[3][2][0]			[3][2][1]
const favorites = [['Get Out', 'Don`t Look Up'],['Allison Williams', 'Jennifer Lawrence'], ['blue', 'green'], ['laptop', 'desktop', ['double nested array', 'another one']]];

console.log(favorites[0][1]); // Don't Look Up
console.log(favorites[2][0]); // blue
console.log(favorites[1][1]); // Jennifer Lawrence
