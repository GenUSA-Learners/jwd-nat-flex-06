console.log('Your JS file is linked!');

// Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Write your code below this line:

// function declaration
function printMyMusicApp1(myMusicApp) {
	console.log(`I use ${myMusicApp} to listen to music`);
}

// function expression
const printMyMusicApp2 = function(myMusicApp) {
	console.log(`I use ${myMusicApp} to listen to music`);
}

// arrow function
// no function keyword
const printMyMusicApp3 = (myMusicApp, myBoolean) => {
	if(myBoolean) {
		console.log(`I use ${myMusicApp} to listen to music`);
	} else {
		console.log(`I don't use ${myMusicApp} to listen to music`);
	}
}

myBool = true;
myApp = 'Apple Music';

printMyMusicApp1('Spotify');
printMyMusicApp2('Spotify');
printMyMusicApp3(myApp, myBool);
