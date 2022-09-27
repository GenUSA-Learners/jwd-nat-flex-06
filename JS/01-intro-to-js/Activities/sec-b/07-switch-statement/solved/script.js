console.log('Your JS file is linked!');

// E-Commerce Item list
// Use a swtich statement to print the price of the each item in the store to the console.
// Ex. If the value of the variable is 'shoes' then, the statement "Shoes are $50" should be printed to the console.

// Items:
// Shoes- $50
// Jeans- $25
// Hat- $12
// Socks- $2
// If the variable input is not an item in the store, then print 'Invalid Item' to the console.

// Hint - Reference: Codecademy lesson 10
// Hint - Pseudocode your plan to get started

//Write your code for the E-Commerce item list below this line:

let storeItem = 'shoes'

switch (storeItem) {
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
};
